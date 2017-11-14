<template lang="html">
  <div class="">
    <div class="h-storetbox">
	<div class="container m_mt30">
		<div class="store-left fl">
      <!-- 放大镜-->
      <div class="zoom-box"><!-- 容器-->
        <div class="small-box"><!-- 小图片容器-->
          <img :src="img01"/>
          <div class="square"></div><!-- 鼠标选中框-->
          <div class="mask"></div><!-- 鼠标悬浮位置-->
        </div>
        <div class="img-list"><!-- 图片列表-->
          <ul>
            <li @click="huan()"><img :src="img011"/></li>
            <li @click="qie()"><img :src="img033"/></li>
            <li @click="huan()"><img :src="img011"/></li>
            <li @click="qie()"><img :src="img033"/></li>
            <li  @click="huan()"><img :src="img011"/></li>
     </ul>
 </div>
 <div class="big-box"><!-- 放大镜-->
    <img :src="img01"/>
 </div>
</div>
		</div>
		<div class="store-des fr">
			<h2 class="y_pdname">18-50岁 女性 适用于评估怀孕中母体基因患病风险</h2>
			<h3>18-50岁 女性 适用于评估怀孕中母体基因患病风险</h3>
			<h3>采样方式：血液  怀孕12-14周检测一次</h3>
			<div class="price">
				<span class="tag">价格</span>
				<p>￥ 1200</p>
			</div>
			<div class="y_sendareabx">
				<span class="tag fl">价格</span>
				<div class="dd">
					<span class="fl">北京 至</span>
					<div class="y_sendarea fl">
						<span class="y_areasure">北京省<i></i></span>
						<div class="y_areabox">
							<select class="form-control">
								<option>北京省</option>
							</select>
							<select class="form-control">
								<option>北京市</option>
							</select>
							<select class="form-control">
								<option>海淀区</option>
							</select>
							<b class="y_arelose">x</b>
						</div>
					</div>
					<p class="fl">快递：¥10.0</p>
				</div>
			</div>
			<ul class="select-service">
				<li>
					<span class="tag fl">选择基因检测产品</span>
					<div class="opt">
						<div class="item active">
							<p><span class="fl">博奥颐和</span><span class="fr">+ RBM 1200</span></p>
						</div>
						<div class="item">
							<p><span class="fl">博奥颐和</span><span class="fr">+ RBM 1200</span></p>
						</div>
					</div>
				</li>
				<li>
					<span class="tag fl">选择采样方式</span>
					<div class="opt">
						<div class="item">
							<p><span class="fl">快递采样</span></p>
						</div>
						<div class="item">
							<p><span class="fl">上门采样</span><span class="fr">+ RBM 200</span></p>
						</div>
					</div>
				</li>
				<li>
					<span class="tag fl">更高级的评估服务</span>
					<div class="opt">
						<div class="item">
							<p><span class="fl">国家内专家团诊断报告</span><span class="fr">+ RBM 300</span></p>
						</div>
						<div class="item">
							<p><span class="fl">国家内专家团诊断报告</span><span class="fr">+ RBM 500</span></p>
						</div>
					</div>
				</li>
			</ul>
			<div class="srore-btn m_mt20">
				<a href="##" class="btn btn-custom5" data-toggle="modal">立即购买</a>
				<a href="##" class="store_up cur"><span></span>收藏</a>
				<a href="##" class="share"><span></span>分享</a>
			</div>
		</div>
	</div>
</div>
<!--商品描述 -->
<div class="container">
	<div class="h_dright">
      	<div class="tabtit">
	    		<ul class="tab_style2 clearfix">
	      		<li class="active"><a href="#tab1" data-toggle="tab">商品详情</a></li>
	      		<li><a href="#tab2" data-toggle="tab">商品评价</a></li>
	      	</ul>
      	</div>
      	<div class="tab-content">
      		<div id="tab1" class="tab-pane active">
			    <section class="h_hos_des">
					<div><img src="../assets/img/adimg/jc01.jpg"></div>
					<div class="founder">
						<h3 class="tit3"> 详情介绍</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc02.jpg"> </div>
						<div class="des">
							<h3 class="dep">采样方式：</h3>
							<p> 血液 </p>
						</div>
						<div class="des">
							<h3 class="dep">检测周期：</h3>
							<p>
								怀孕12周至24周，检测一次。无创产前基因检测结果不能作为终止妊娠的依据，为避免部分检测结果为高风险的宝妈们错过后期进行产前诊断的最佳时间，我们建议宝妈在12-24孕周选择无创产前基因检测，但是超过了24周，结果准确性不会受到影响。
							</p>
						</div>
					</div>
					<div class="founder">
						<h3 class="tit3">功能介绍</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc03.jpg"> </div>
						<p>
							无创DNA产前检测技术仅需采取孕妇静脉血，利用新一代DNA测序技术对母体外周血浆中的游离DNA片段（包含胎儿游离DNA）进行测序，并将测序结果进行生物信息分析，可以从中得到胎儿的遗传信息，能准确检测唐氏综合征（T21）、爱德华综合征（T18）、帕套综合征(T13)三大染色体疾病。无创DNA产前检测的无创伤性可以避免因为侵入性诊断带来流产、感染风险。而DNA测序技术的成熟性能保证技术的准确率，孕妇在12周以上即可检测，10个工作日出检测结果。
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3">获得荣誉</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc04.jpg"> </div>
						<p>
							我国为出生缺陷的高发国，在每年约1600万的新生儿中，先天性致愚致残缺陷儿占每年出生人口总数的4%-6%，总数高达120万，占全世界每年500多万出生缺陷儿童的五分之一。我国政府每年支付82亿元左右的经费用于唐氏综合征患儿的医疗和社会救济，存活下来的出生缺陷儿多为终生残疾或智力障碍，无法治愈，由此给社会造成了严重的经济负担，对家庭造成的心理负担和精神痛苦更是无法用金钱来衡量。无创DNA产前检测技术的临床应用会为我国出生缺陷儿的产前检测做出极大贡献。
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3">品牌介绍</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc08.jpg"> </div>
						<p>
							创始人：无创产检奠基人卢煜明教授<br>
							香港中文大学教授卢煜明在1997年和1998年的工作中发现，母体血液中存在着胎儿的游离DNA。基于这些早期发现，卢煜明展开了一系列前沿工作来研究这些胎儿游离DNA的特性，证明了使用胎儿游离DNA来诊断遗传性疾病的可行性和实际性，最终开创了利用第二代基因测序来检测唐氏综合症的新途径，并在90多个国家得到了应用。仅在中国，每年就有超过一百万孕妇接受这项测试。这种革命性的方法为全球无数的孕妇提供了无创产前诊断。
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3">品牌成长史</h3>
						<p>
							1969年首次报道发现母体外周血中存在胎儿细胞，经过几十年研究发现其含量极低且存在时间较长，这些特点使其在产前诊断领域的应用受到较大的限制。
							<br>1997年香港中文大学卢煜明 (Dennis Lo) 教授发现母体外周血浆中存在游离胎儿DNA，随孕周增加稳定存在，且随孕妇分娩快速消失，可以作为非创伤性产前诊断的理想材料。
							母体外周血浆中胎儿游离DNA含量大概占全部游离DNA的3-13%，也有不同研究认为其含量稍高。由于大量来源于母体背景的游离DNA影响，需要选择超级灵敏的新一代分子生物学技术才可以在大数据量水平上对胎儿游离DNA的碱基序列做出准确判断。 早期的研究中，无创产前DNA分析对三体胎儿检测需要多个胎盘DNA或RNA标记，这使得试验非常耗时和昂贵。经过改进和优化的技术称为大规模并行基因组测序技术，它使用一个高度敏感的检测方法，可以量化千万数量的DNA片段，与早期的技术相比，其可以准确地检测出13三体、18三体和21三体综合征。
							<br>2007年，周代星博士，香港中文大学Dennis Lo教授，以及现任美国约翰霍普金斯教授的高远博士，开始合作研究非侵入性的产前遗传学检测技术，首先于21号染色体三体综合征（即唐氏综合征）取得突破。
							<br>2010年，周代星博士，高扬博士等率领探索针对唐氏综合征的无创DNA产前检测的临床应用，同时继续追求创新研发，实现了在唐氏综合征基础上对胎儿的爱德华综合征（T18）、帕陶氏综合征(T13)染色体疾病的产前检测。
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3">相关案例</h3>
						<p>
							迄今为止，针对染色体疾病还没有有效的治疗手段。因此，降低生育染色体疾病患儿风险的最好方法是尽早通过产前遗传咨询以及产前检测、诊断、发现并解决问题。<br>
							国际上，美国已经有此项技术的开展和服务，提供此技术的公司包括Sequenom和Natera等。并且部分地区（州）此检测费用可由商业保险部分覆盖，因此颇受孕妇欢迎，特别是高龄孕妇。在欧洲，提供此项服务的至少有LifeCodexx，不过由于欧洲在产科技术上和宗教信仰上的相对保守，该技术的开展相对美国缓慢。从国外临床试验数据可以看出，无创DNA产前检测技术对于胎儿的三大染色体疾病（唐氏综合征（T21）、爱德华氏综合征（T18）、帕陶氏综合征（T13））的检出率均在90%以上。
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3"> 厂家介绍</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc09.jpg"> </div>
						<p>
							博奥颐和健康科学技术（北京）有限公司（以下简称：博奥颐和）成立于2014年7月，隶属清华医疗健康旗舰公司——博奥生物集团有限公司，是清华大学布局大健康领域的健康管理旗舰公司，致力于“打造以个体为中心的身心大健康管理系统”，依托清华大学、博奥生物集团有限公司，形成了以生物工程、信息工程、移动互联网技术为纽带，集健康产品、健康管理、医疗康复于一体的大健康产业链，秉承“依测而调”的理念，开发的系列产品和服务包括对人身、心和身处环境进行动态监/检测的产品，依据中医理论，采用现代科技手段打造的调理产品，还有以增加生理寿命，提高生活质量为目的的机能增强产品等，是科学、个性化的“全人全程”健康管理理念的开创者和践行者。在健康管理实践方面，借助博奥颐和极具特色的国医治未病、多组学联检、大情志调理、环境测调控、膳练息意疗、健康智慧云六大板块强大的集成功能，现已在北京、成都、重庆等地建设了融传统文化与现代技术于一体的创新性健康管理服务平台——类经堂。
							<br>博奥颐和全面布局大健康产业，现已在健康管理领域取得了丰硕的成果，正在向大健康领域的国际创新型领袖公司大步迈进
						</p>
					</div>
					<div class="founder">
						<h3 class="tit3">产品相关资质</h3>
						<div class="pic6"> <img src="../assets/img/adimg/jc10.jpg"> </div>
					</div>
					<div class="founder m_pb30">
						<h3 class="tit3">注意事项</h3>
						<p>
							下列检查项目须空腹完成：采血、腹部B超、碳十三呼气试验。内科检查前请您选测血压。
							<br>未婚女性进行妇科检查时请向医生咨询
							<br>准备近期生育的先生.女士，还应避免妇科检查及阴式超声检查
							<br>女性在月经期间请不要留取尿液标本及妇检，月经期后再作检查
							<br>女性子宫附件B超请在妇科检查前完成，因为女性子宫附件B超检查需保持膀胱充盈（憋尿），妇科检查前需排清小便
						</p>
					</div>
				</section>
      		</div>
      		<div id="tab2" class="tab-pane">
      			商品评价
      		</div>
      	</div>
     </div>
</div>
<!--商品描述 end -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      img01:'../../static/images/01.jpg',
      img011:'../../static/images/01.jpg',
      img03:'../../static/images/03.jpg',
      img033:'../../static/images/03.jpg'
    }
  },
  methods:{
    qie(){
      this.img01=this.img03;
    },
    huan(){
      this.img01=this.img011;
    },
    imagesEnlarge(){
      //获取要操作的元素
        var smallbox = $('.small-box .mask');
        var smallimg = $('.small-box img');
        var square = $('.square');
        var bigbox = $('.big-box');
        var bigimg = $('.big-box img');
        var imgs = $all('.img-list img');
        //鼠标经过图片列表显示被选中，实现图片切换
        for(var i = 0; i < imgs.length; i++){
            imgs[i].onclick = function(){
                for(var j = 0; j < imgs.length; j++){
                    imgs[j].className = '';
                }
                this.className = 'active';
            };
        }
        //鼠标移入放大器显示并设置选中框的大小
        smallbox.onmouseover = function(){
            square.style.display = 'block';
            bigbox.style.display = 'block';
            //位置w/smallimg.w = bigbox.w/bigimg.w
            square.style.width = bigbox.offsetWidth * smallimg.offsetWidth/bigimg.offsetWidth + 'px';
            square.style.height = bigbox.offsetHeight * smallimg.offsetHeight/bigimg.offsetHeight + 'px';
        };
        //鼠标移出放大器隐藏
        smallbox.onmouseout = function(){
            square.style.display = 'none';
            bigbox.style.display = 'none';
        };
        //放大器移动
        //获取鼠标的位置
        smallbox.onmousemove = function(ev){
            var oEvent = ev || event;
            var x = oEvent.offsetX - square.offsetWidth/2;
            var y = oEvent.offsetY - square.offsetHeight/2;
            if(x < 0){
                x = 0;
            }
            if(x > smallbox.offsetWidth - square.offsetWidth){
                x = smallbox.offsetWidth - square.offsetWidth;
            }
            if(y < 0){
                y = 0;
            }
            if(y > smallbox.offsetHeight - square.offsetHeight){
                y = smallbox.offsetHeight - square.offsetHeight;
            }
            //给选中框定位
            square.style.left = x + 'px';
            square.style.top = y + 'px';
            //给放大器定位  x/? = smallimg.w/bigimg.w
            bigimg.style.top = -y * bigimg.offsetWidth/smallimg.offsetWidth + 'px';
            bigimg.style.left = -x * bigimg.offsetHeight/smallimg.offsetHeight + 'px';

        };
        //通过名称查找某个元素
        function $(name){
            return document.querySelector(name);
        }
        //通过名称查找相同的一组数据
        function $all(name){
            return document.querySelectorAll(name);
        }
    }
  },
  mounted(){
    this.imagesEnlarge();
  }
}
</script>

<style lang="css" scoped>
/*放大镜*/
.zoom-box{
            width: 420px;
            position: relative;
        }
        .small-box{
            position: relative;
            border: 1px solid #ccc;
        }
        .small-box img{
            width: 100%;
            height: 100%;
        }
        .small-box .square{
            position: absolute;
            left: 0;
            top: 0;
            background: yellow;
            opacity: 0.5;
            /*display: none;*/
        }
        .small-box .mask{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        .img-list ul{
            list-style: none;
            padding: 0;
            display: flex;
        }
        .img-list li{
        	width: 50px;
        	height: 50px;
        }
        .img-list li img{
        	width: 100%;
        	height: 100%;
        }
        .img-list ul::after{
            clear: both;
            content: '';
            display: table;
        }
        .img-list ul li{
            float: left;
            margin: 0 10px;
            padding: 6px;
        }
        .img-list img{
            border: 2px solid transparent;
        }
        .img-list img.active{
            border: 2px solid red;
        }
        .big-box{
            position: absolute;
            top: 0;
            left: 100%;
            margin-left: 2px;
            border: 1px solid #cccccc;
            width: 500px;
            height: 500px;
            overflow: hidden;
            display: none;
        }
        .big-box img{
            position: absolute;
            top: 0;
            left: 0;
        }

.h-storetbox {
    clear: both;
    overflow: hidden;
}
store-left {
    width: 35%;
}
.store-left {
    width: 35%;
}
.store-des {
    width: 60%;
}
.store-des h2 {
    font-size: 20px;
}
.store-des h3 {
    font-size: 16px;
    color: #666666;
    margin: 5px 0;
}
.store-des .price {
    background: #f5f5f5;
    line-height: 75px;
    overflow: hidden;
}
.store-des span.tag {
    font-size: 12px;
    float: left;
    color: #999999;
    display: inline-block;
    margin-left: 12px;
}
.store-des .price p {
    color: #f71231;
    font-size: 24px;
    margin-left: 60px;

}
.y_sendareabx {
    line-height: 40px;
}
.store-des span.tag {
    font-size: 12px;
    float: left;
    color: #999999;
    display: inline-block;
    margin-left: 12px;
}
.y_sendareabx .dd {
    height: 40px;
    margin-left: 64px;
}
.y_sendareabx .y_sendarea {
    margin-left: 5px;
    position: relative;
    margin-right: 10px;
    display: inline-block;
}
.y_sendareabx .y_sendarea .y_areasure {
    position: relative;
    z-index: 6;
    cursor: pointer;
}
.y_areasure i {
    background: url(../assets/img/icons/bg_in.png) no-repeat -96px -111px;
    width: 20px;
    display: inline-block;
    height: 20px;
    vertical-align: middle;
}
.y_sendareabx .y_sendarea .y_areabox {
    border: 1px solid #e8e8e8;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    width: 400px;
    background: #fff;
    z-index: 5;
    padding: 10px 0;
    top: 30px;
    left: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.y_sendareabx select {
    height: 28px;
    line-height: 28px;
    padding-top: 0;
    padding-bottom: 0;
    float: left;
    width: 30%;
    margin-left: 2.5%;
    padding-right: 0;
    font-weight: lighter;
}
.form-control {
    box-shadow: none;
    border-radius: 0;
    padding: 7px 10px;
    font-size: 12px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #e8e8e8;
    display: block;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -o-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}
option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}
.store-des .select-service {
    padding-top: 20px;
    border-top: 1px solid #e8e8e8;
    overflow: hidden;
    line-height: 50px;
}
.store-des .select-service li {
    overflow: hidden;
    clear: both;
}
.store-des .select-service .tag {
    width: 96px;
    text-align: right;
}
.store-des span.tag {
    font-size: 12px;
    float: left;
    color: #999999;
    display: inline-block;
    margin-left: 12px;
}
.store-des .select-service .opt {
    margin-left: 18px;
    float: left;
}
.store-des .select-service .item.active, .store-des .select-service .item:hover {
    border-color: #10acff;
}
.store-des .select-service .item {
    float: left;
    border: 1px solid #e8e8e8;
    font-size: 12px;
    padding: 0 10px;
    margin: 0 0 20px 20px;
    display: inline-block;
    width: 200px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.store-des .select-service .item {
    float: left;
    border: 1px solid #e8e8e8;
    font-size: 12px;
    padding: 0 10px;
    margin: 0 0 20px 20px;
    display: inline-block;
    width: 200px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.btn-custom5:hover{
  background: #c30202;
}
.btn-custom5 {
    color: #fff;
    border-color: #f71231;
    background-color: #f71231;
    padding: 8px 80px;
}
.store-des .srore-btn a {
    width: 170px;
    margin-left: 12px;
    border-radius: 0;
    font-size: 16px;
}
.store_up {
    color: #999999;
}
a.share {
    color: #666666;
}
a.share span {
    width: 14px;
    height: 14px;
    background: url(../assets/img/icons/bg_in.png) 0 -484px;
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
    margin-top: -3px;
}

</style>
