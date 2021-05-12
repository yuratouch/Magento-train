<?php

namespace Vndr\Mod\Setup\Patch\Data;

use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Cms\Model\PageFactory;
use Magento\Cms\Model\BlockFactory;

class MageUpdatePage implements DataPatchInterface {

    private $pageFactory;
    private $blockFactory;
    private $moduleDataSetup;

    public function __construct(
        PageFactory $pageFactory,
        ModuleDataSetupInterface $moduleDataSetup
    ) {
        $this->pageFactory = $pageFactory;
        $this->moduleDataSetup = $moduleDataSetup;
    }

    public function apply () {

        $this->moduleDataSetup->startSetup();
        $updatedPageContent = '<h2>Updated content with patch for this CMS page in MAG-41.</h2>';

        $updatedPage = $this->pageFactory->create()->load(
            'mag38-task-updated',
            'identifier'
        );
        $updatedPageId = $updatedPage->getId();
        if ($updatedPageId) {
            $updatedPage->setContent($updatedPageContent);
            $updatedPage->save();
        }
        $this->moduleDataSetup->endSetup();
    }
    public static function getDependencies() {
        return [];
    }
    public static function getVersion() {
        return '1.0.1';
    }
    public function getAliases() {
        return [];
    }
}
