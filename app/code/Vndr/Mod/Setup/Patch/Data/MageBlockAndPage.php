<?php
namespace Vndr\Mod\Setup\Patch\Data;

use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Cms\Model\PageFactory;

class MageBlockAndPage implements DataPatchInterface
{
    /**
     * @var ModuleDataSetupInterface
     */
    private $moduleDataSetup;

    /**
     * @var PageFactory
     */
    private $pageFactory;
    /**
     * @var \Magento\Cms\Model\ResourceModel\Page
     */
    private $pageResource;

    /**
     * AddNewCmsPage constructor.
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param PageFactory $pageFactory
     * @param \Magento\Cms\Model\ResourceModel\Page $pageResource
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        PageFactory $pageFactory,
        \Magento\Cms\Model\ResourceModel\Page $pageResource
    ) {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->pageFactory = $pageFactory;
        $this->pageResource = $pageResource;
    }

    /**
     * {@inheritdoc}
     */
    public function apply()
    {
        $pageIdentifier = 'mag39-task';

        $pageData = [
            'title' => 'MAG-39 Task',
            'page_layout' => '1column',
            'meta_keywords' => '',
            'meta_description' => '',
            'identifier' => $pageIdentifier,
            'content_heading' => '',
            'content' => '{{block class="Magento\Cms\Block\Block" block_id="mag33-task"}}',
            'layout_update_xml' => '',
            'url_key' => $pageIdentifier,
            'is_active' => 1,
            'stores' => [0], // store_id comma separated
            'sort_order' => 0
        ];

        $this->moduleDataSetup->startSetup();
        /* Save CMS Page logic */
        $this->pageFactory->create()->setData($pageData)->save();
        $this->moduleDataSetup->endSetup();
    }

    /**
     * {@inheritdoc}
     */
    public static function getDependencies()
    {
        return [];
    }

    /**
     * {@inheritdoc}
     */
    public function getAliases()
    {
        return [];
    }
}
