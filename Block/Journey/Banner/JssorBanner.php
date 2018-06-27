<?php

namespace Boxalino\Intelligence\Block\Journey\Banner;

use \Boxalino\Intelligence\Block\Journey\CPOJourney as CPOJourney;

/**
 * Class JssorBanner
 * @package Boxalino\Intelligence\Block\Journey\Banner
 */
class JssorBanner extends \Magento\Framework\View\Element\Template implements CPOJourney{

    /**
     * @var \Psr\Log\LoggerInterface
     */
    protected $_logger;

    /**
     * @var \Boxalino\Intelligence\Block\BxJourney
     */
    protected $bxJourney;

    /**
     * @var \Boxalino\Intelligence\Helper\P13n\Adapter
     */
    protected $p13nHelper;

    /**
     * Text constructor.
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Boxalino\Intelligence\Block\BxJourney $journey,
        \Boxalino\Intelligence\Helper\P13n\Adapter $p13nHelper,
        array $data = []
    )
    {
        parent::__construct($context, $data);
        $this->_logger = $context->getLogger();
        $this->bxJourney = $journey;
        $this->p13nHelper = $p13nHelper;
    }

    public function getSubRenderings()
    {
        $elements = array();
        $element = $this->getData('bxVisualElement');
        if(isset($element['subRenderings'][0]['rendering']['visualElements'])) {
            $elements = $element['subRenderings'][0]['rendering']['visualElements'];
        }
        return $elements;
    }

    public function renderVisualElement($element, $additional_parameter = null)
    {
        return $this->bxJourney->createVisualElement($element, $additional_parameter)->toHtml();
    }

    public function getLocalizedValue($values) {
        return $this->p13nHelper->getClientResponse()->getLocalizedValue($values);
    }

    public function bxGetBanner($choiceId = null) {

        $visualElement = $this->getData('bxVisualElement');
        $bannerData = array();
        $variant_index = null;
        foreach ($visualElement['parameters'] as $parameter) {
            if($parameter['name'] == 'variant') {
                $variant_index = reset($parameter['values']);
                break;
            }
        }
        if($choiceId != null) { $variant_index++; $choiceId = null; }
        if(!is_null($variant_index)) {
            $choiceId = $this->p13nHelper->getClientResponse()->getChoiceIdFromVariantIndex($variant_index) ;
            $bannerData['hitCount'] = sizeof($this->p13nHelper->getClientResponse()->getHitIds($choiceId, true, 0));
            $bannerData['bannerLayout'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_layout', '', $choiceId, true, 0);
            $bannerData['bannerTitle'] = $this->p13nHelper->getClientResponse()->getResultTitle($choiceId, 0);
            $bannerData['bannerId'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_id', '', $choiceId, true, 0);

            $slides = $this->p13nHelper->getClientResponse()->getHitFieldValues(array('products_bxi_bxi_jssor_slide', 'products_bxi_bxi_name'), $choiceId, true, 0);
            $counters = array();
            foreach($slides as $id => $val) {
                $slides[$id]['div'] = $this->getBannerSlide($id, $val, $counters);
            }
            if ($bannerData['bannerLayout'] != 'large' || $this->getData('jssorIndex') != null) {
                if ($this->getData('jssorIndex') == '1') {
                    return array(reset($slides));
                }
                if ($this->getData('jssorIndex') == '2') {
                    return array(end($slides));
                }
            }
            $bannerData['bannerSlides'] = $slides;

            $bannerData['bannerTransitions'] = $this->getBannerJssorSlideGenericJS('products_bxi_bxi_jssor_transition', 0, $choiceId);
            $bannerData['bannerBreaks'] = $this->getBannerJssorSlideGenericJS('products_bxi_bxi_jssor_break', 0, $choiceId);
            $bannerData['bannerControls'] = $this->getBannerJssorSlideGenericJS('products_bxi_bxi_jssor_control', 0, $choiceId);
            $bannerJssorOptions = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_options', '', $choiceId, true, 0);
            // replace id from Intelligence with id from block configuration
            $bannerData['bannerOptions'] = $this->getData('jssorID') != null ? str_replace($bannerData['bannerId'], $this->getData('jssorID'), $bannerJssorOptions) : $bannerJssorOptions;
            $bannerData['bannerMaxWidth'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_max_width', '', $choiceId, true, 0);
            $bannerJssorCss = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_css', '', $choiceId, true, 0);
            // replace id from Intelligence with id from block configuration
            $bannerJssorCss = str_replace($bannerData['bannerId'], $this->getData('jssorID'), $bannerJssorCss);
            $bannerData['bannerCSS'] = str_replace("JSSORID", $bannerData['bannerId'], $bannerJssorCss);

            $bannerData['bannerStyle'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_style', '', $choiceId, true, 0);
            $bannerData['bannerSlidesStyle'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_slides_style', '', $choiceId, true, 0);
            $bannerData['bannerLoadingScreen'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_loading_screen', '', $choiceId, true, 0);
            $bannerData['bannerBulletNavigator'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_bullet_navigator', '', $choiceId, true, 0);
            $bannerData['bannerArrowNavigator'] = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_arrow_navigator', '', $choiceId, true, 0);
            $bannerFunction = $this->p13nHelper->getClientResponse()->getExtraInfo('banner_jssor_function', '', $choiceId, true, 0);
            $bannerData['bannerFunction'] = $this->getData('jssorID') != null ? str_replace($bannerData['bannerId'], $this->getData('jssorID'), $bannerFunction) : $bannerFunction;
        }
        return $bannerData;
    }

    protected function getBannerJssorSlideGenericJS($key, $variant_id, $choiceId=null) {
        $language = $this->p13nHelper->getLanguage();
        $slides = $this->p13nHelper->getClientResponse()->getHitFieldValues(array($key), $choiceId, true, 0);
        $jsArray = array();
        foreach($slides as $id => $vals) {
            if(isset($vals[$key]) && sizeof($vals[$key]) > 0) {

                $jsons = json_decode($vals[$key][0], true);
                if(isset($jsons[$language])) {
                    $json = $jsons[$language];
                    //fix some special case an extra '}' appears wrongly at the end
                    $minus = 2;
                    if(substr($json, strlen($json)-1, 1) == '}') {
                        $minus = 3;
                    }
                    //removing the extra [] around
                    $json = substr($json, 1, strlen($json)-$minus);
                    $jsArray[] = $json;
                }
            }
        }
        return '[' . implode(',', $jsArray) . ']';
    }

    protected function addPrefixToClasses($json){
        $idFromConfig = $this->getData('jssorID');
        $elems = explode(' ' ,$json);
        foreach ($elems as $i => $value) {
            if (preg_match('/bxBanner/', $value)) {
                $value = str_replace('bxBanner', $idFromConfig . '_bxBanner', $value);
                $elems[$i] = $value;
            }
        }
        $json = implode(' ', $elems);
        return $json;
    }

    protected function getBannerSlide($id, $vals, &$counters) {
        $language = $this->p13nHelper->getLanguage();
        if(isset($vals['products_bxi_bxi_jssor_slide']) && sizeof($vals['products_bxi_bxi_jssor_slide']) > 0) {
            $json = $vals['products_bxi_bxi_jssor_slide'][0];

            $slide = json_decode($json, true);
            if(isset($slide[$language])) {
                $json = $slide[$language];

                // add configId as prefix for the classes

                $json = $this->addPrefixToClasses($json);

                for($i=1; $i<10; $i++) {

                    if(!isset($counters[$i])) {
                        $counters[$i] = 0;
                    }

                    $pieces = explode('BX_COUNTER'.$i, $json);
                    foreach($pieces as $j => $piece) {
                        if($j >= sizeof($pieces)-1) {
                            continue;
                        }
                        $pieces[$j] .= $counters[$i]++;
                    }
                    $json = implode('', $pieces);

                }
                return $json;
            }
        }
        return '';
    }

    public function getP13nHelper(){
      return $this->p13nHelper;
    }
}