<?php

namespace Boxalino\Intelligence\Block;

/**
 * Class Facets
 * @package Boxalino\Intelligence\Block
 */
class SearchMessage extends \Magento\Framework\View\Element\Template{

    /**
     * @var \Boxalino\Intelligence\Helper\P13n\Adapter
     */
    private $p13nHelper;

    /**
     * @var \Boxalino\Intelligence\Helper\Data
     */
    private $bxHelperData;

    private $bxResponse;

    /**
     * SearchMessage constructor.
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param \Boxalino\Intelligence\Helper\P13n\Adapter $p13nHelper
     * @param \Boxalino\Intelligence\Helper\Data $bxHelperData
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Boxalino\Intelligence\Helper\P13n\Adapter $p13nHelper,
        \Boxalino\Intelligence\Helper\Data $bxHelperData,
        array $data = []
    )
    {

        parent::__construct($context, $data);
        $this->p13nHelper = $p13nHelper;
        $this->bxHelperData = $bxHelperData;

    }

    public function isActive(){

        if ($this->bxHelperData->isPluginEnabled()) {

            return true;

        }

    }

    public function getResponse(){

        if(is_null($this->bxResponse)){

            $this->bxResponse = $this->p13nHelper->getResponse();
        }

        return $this->bxResponse;

    }

    public function getSearchMessageTitle($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_title', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageTitleCssClass($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_title_css_class', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageDescription($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_description', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageDescriptionCssClass($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_description_css_class', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageTitleStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_title_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageDescriptionStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_description_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageContainerStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_container_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageLinkStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_link_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageMainLinkCssClass($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_main_link_css_class', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageSideImageStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_side_image_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageMainImageStyle($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_main_image_style', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageMainImage($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_main_image', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageMainImageCssClass($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_main_image_css_class', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageSideImage($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_side_image', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageSideImageCssClass($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_side_image_css_class', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageLink($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_link', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageLinkCssClass($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('search_message_link_css_class', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getRedirectLink($language=null, $defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfoLocalizedValue('redirect_url', $language, $defaultExtraInfoValue, $prettyPrint, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageGeneralCss($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_general_css', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }

    public function getSearchMessageDisplayType($defaultExtraInfoValue = null, $prettyPrint=false, $choice=null, $considerRelaxation=true, $count=0, $maxDistance=10, $discardIfSubPhrases = true) {
        return $this->getResponse->getExtraInfo('search_message_display_type', $defaultExtraInfoValue, $choice, $considerRelaxation, $count, $maxDistance, $discardIfSubPhrases);
    }


}
