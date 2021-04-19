<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

declare(strict_types=1);

namespace Vndr\Mod\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Framework\Serialize\SerializerInterface;

/**
 * MagTask view model class
 */
class MagTask implements ArgumentInterface
{
    /**
     * @var \Magento\Framework\App\Http\Context
     */
    protected $httpContext;

    /**
     * @var Magento\Framework\Serialize\Serializer\Json
     */
    protected $jsonMethod;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Magento\Framework\App\Http\Context $httpContext
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Framework\App\Http\Context $httpContext,
        \Magento\Framework\Serialize\Serializer\Json $jsonMethod,
        array $data = []
    ) {
        $this->httpContext = $httpContext;
        $this->jsonMethod = $jsonMethod;
    }

    /**
     * Checking customer login status
     *
     * @return bool
     */
    public function customerLoggedIn()
    {
        return (bool)$this->httpContext->getValue(\Magento\Customer\Model\Context::CONTEXT_AUTH);
    }

    /**
     * Convert string into parsed associative array
     *
     * @return array
     */
    public function unserializeDataMag($dataUnser)
    {
        return $this->jsonMethod->unserialize($dataUnser);
    }

}
