<?php

namespace Vndr\Mod\Setup\Patch\Data;

use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Cms\Model\BlockFactory;

class MageUpdateBlock implements DataPatchInterface {

    private $blockFactory;
    private $moduleDataSetup;

    public function __construct(
        BlockFactory $blockFactory,
        ModuleDataSetupInterface $moduleDataSetup
    ) {
        $this->blockFactory = $blockFactory;
        $this->moduleDataSetup = $moduleDataSetup;
    }

    public function apply () {

        $this->moduleDataSetup->startSetup();
        $test2BlockContent = '<p>Updated content with patch for this CMS block in MAG-40.</p>';

        $test2Block = $this->createBlock()->load(
            'mag37-task',
            'identifier'
        );
        $test2BlockId = $test2Block->getId();
        if ($test2BlockId) {
            $test2Block->setContent($test2BlockContent);
            $test2Block->save();
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
    private function createBlock() {
        return $this->blockFactory->create();
    }
}

