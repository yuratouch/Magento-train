<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Vndr\Mod\Setup\Patch\Data;

use Magento\Framework\Setup\ModuleDataSetupInterface;
use Magento\Framework\Setup\Patch\DataPatchInterface;
use Magento\Cms\Model\BlockFactory;

/**
 */
class MagePatchTask implements DataPatchInterface
{
    const BLOCK_IDENTIFIER = 'mag37-task';

    /**
     * @var ModuleDataSetupInterface
     */
    private $moduleDataSetup;

    /**
     * @var BlockFactory
     */
    protected $blockFactory;

    /**
     * @param ModuleDataSetupInterface $moduleDataSetup
     * @param BlockFactory $blockFactory
     */
    public function __construct(
        ModuleDataSetupInterface $moduleDataSetup,
        BlockFactory $blockFactory
    )
    {
        $this->moduleDataSetup = $moduleDataSetup;
        $this->blockFactory = $blockFactory;
    }

    /**
     * {@inheritdoc}
     */
    public function apply()
    {
        $headerNoticeData = [
            'title' => 'MAG-37 Task',
            'identifier' => self::BLOCK_IDENTIFIER,
            'content' => '<div>
                            <p>This is string from MAG-37 task which was added by patch update.</p>
                          </div>',
            'stores' => [0],
            'is_active' => 1,
        ];

        $this->moduleDataSetup->startSetup();

        $block = $this->blockFactory->create();
        $block->setData($headerNoticeData)->save();

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
