<?php



namespace Boxalino\Intelligence\Controller\Index;

  class Setproperties extends \Magento\Framework\App\Action\Action{

    protected $context;
    protected $data;
    protected $layoutFactory;
    protected $priceLayout;

    public function __construct(
      \Magento\Framework\App\Action\Context $context,
      \Magento\Framework\View\LayoutFactory $layoutFactory,
      \Magento\Framework\Pricing\Render\Layout $priceLayout,
      array $data = []
    )
    {
      header("Access-Control-Allow-Origin: *");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');
      if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
          header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
          header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
      }
      $this->context = $context;
      $this->data = $data;
      $this->layoutFactory = $layoutFactory;
      $this->priceLayout = $priceLayout;

      parent::__construct($context);

    }

      public function execute(){

        $block = $this->layoutFactory->create()->createBlock('Boxalino\Intelligence\Block\SetProperties');

        $block->sendParametersWithRequest();

      }
  }
