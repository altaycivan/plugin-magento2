<?php

namespace Boxalino\Intelligence\Block;

use com\boxalino\bxclient\v1\BxChooseResponse;

/**
 * Class Facets
 * @package Boxalino\Intelligence\Block
 */
class SearchMessage extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Boxalino\Intelligence\Helper\P13n\Adapter
     */
    private $p13nHelper;

    /**
     * @var \Boxalino\Intelligence\Helper\Data
     */
    private $bxHelperData;

    /**
     * @var BxChooseResponse
     */
    private $bxResponse;

    /**
     * SearchMessage constructor.
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Boxalino\Intelligence\Helper\Data $bxHelperData
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Boxalino\Intelligence\Helper\P13n\Adapter $p13nHelper,
        \Boxalino\Intelligence\Helper\Data $bxHelperData,
        array $data = []
    ){
        parent::__construct($context, $data);
        $this->p13nHelper = $p13nHelper;
        $this->bxHelperData = $bxHelperData;
    }

    public function isActive(){
        if ($this->bxHelperData->isPluginEnabled()) {
            return true;
        }
    }

    public function getResponse()
    {
        if(is_null($this->bxResponse)){
            $this->bxResponse = $this->p13nHelper->getResponse();
        }

        return $this->bxResponse;
    }

    public function getSearchMessageTitle() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_title');
    }

    public function getSearchMessageTitleCssClass() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_title_css_class');
    }

    public function getSearchMessageDescription() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_description');
    }

    public function getSearchMessageDescriptionCssClass() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_description_css_class');
    }

    public function getSearchMessageTitleStyle() {
        return $this->getResponse()->getExtraInfo('search_message_title_style');
    }

    public function getSearchMessageDescriptionStyle() {
        return $this->getResponse()->getExtraInfo('search_message_description_style');
    }

    public function getSearchMessageContainerStyle() {
        return $this->getResponse()->getExtraInfo('search_message_container_style');
    }

    public function getSearchMessageLinkStyle() {
        return $this->getResponse()->getExtraInfo('search_message_link_style');
    }

    public function getSearchMessageMainLinkCssClass() {
        return $this->getResponse()->getExtraInfo('search_message_main_link_css_class');
    }

    public function getSearchMessageSideImageStyle() {
        return $this->getResponse()->getExtraInfo('search_message_side_image_style');
    }

    public function getSearchMessageMainImageStyle() {
        return $this->getResponse()->getExtraInfo('search_message_main_image_style');
    }

    public function getSearchMessageMainImage() {
        return $this->getResponse()->getExtraInfo('search_message_main_image');
    }

    public function getSearchMessageMainImageCssClass() {
        return $this->getResponse()->getExtraInfo('search_message_main_image_css_class');
    }

    public function getSearchMessageSideImage() {
        return $this->getResponse()->getExtraInfo('search_message_side_image');
    }

    public function getSearchMessageSideImageCssClass() {
        return $this->getResponse()->getExtraInfo('search_message_side_image_css_class');
    }

    public function getSearchMessageLink() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_link');
    }

    public function getSearchMessageLinkCssClass() {
        return $this->getResponse()->getExtraInfoLocalizedValue('search_message_link_css_class');
    }

    public function getRedirectLink() {
        return $this->getResponse()->getExtraInfoLocalizedValue('redirect_url');
    }

    public function getSearchMessageGeneralCss() {
        return $this->getResponse()->getExtraInfo('search_message_general_css');
    }

    public function getSearchMessageDisplayType() {
        return $this->getResponse()->getExtraInfo('search_message_display_type');
    }


}
