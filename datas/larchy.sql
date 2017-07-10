-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-06-06 11:44:38
-- 服务器版本： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `larchy`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
`id` int(50) NOT NULL,
  `adminName` varchar(50) NOT NULL,
  `adminPass` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `adminName`, `adminPass`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- 表的结构 `advertise`
--

CREATE TABLE IF NOT EXISTS `advertise` (
`ad_id` int(50) NOT NULL,
  `ad_title` varchar(50) NOT NULL,
  `ad_src1` varchar(50) NOT NULL,
  `ad_src2` varchar(50) NOT NULL,
  `ad_src3` varchar(50) NOT NULL,
  `ad_src4` varchar(50) NOT NULL,
  `ad_src5` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `advertise`
--

INSERT INTO `advertise` (`ad_id`, `ad_title`, `ad_src1`, `ad_src2`, `ad_src3`, `ad_src4`, `ad_src5`) VALUES
(1, 'photo1', '../images/advertiseImg/imgList (1).jpg', '../images/advertiseImg/imgList (2).jpg', '../images/advertiseImg/imgList (3).jpg', '../images/advertiseImg/imgList (4).jpg', '../images/advertiseImg/imgList (5).jpg'),
(2, 'photo2', '../images/advertiseImg/imgList (7).jpg', '../images/advertiseImg/imgList (8).jpg', '../images/advertiseImg/imgList (9).jpg', '../images/advertiseImg/imgList (10).jpg', '../images/advertiseImg/imgList (11).jpg');

-- --------------------------------------------------------

--
-- 表的结构 `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `c_id` int(50) NOT NULL,
  `c_g_id` int(50) NOT NULL,
  `c_g_name` varchar(100) NOT NULL,
  `c_g_price` float(10,2) NOT NULL,
  `c_g_src` varchar(100) NOT NULL,
  `c_g_num` int(100) NOT NULL,
  `c_g_count` int(100) NOT NULL,
  `c_user` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `cart`
--

INSERT INTO `cart` (`c_id`, `c_g_id`, `c_g_name`, `c_g_price`, `c_g_src`, `c_g_num`, `c_g_count`, `c_user`) VALUES
(1, 1, 'Six Plus新女冬装休闲毛领连帽宽松中长厚羽绒服外套2134334840 彩蓝601 XL', 455.00, '../images/listImg/goodsImg (39).jpg', 100, 7, 'jjl'),
(2, 2, '纯棉短袖v领T恤女学生宽松夏季韩版半袖前短后长破洞', 555.00, '../images/detailImg/detail_show (1).jpg', 50, 3, 'jjl'),
(8, 8, '【新品】新款钩花V领透视性感宽松雪纺衫女短款打底吊带衫', 232.00, '../images/listImg/goodsImg (1).png', 100, 4, 'jiangjialin');

-- --------------------------------------------------------

--
-- 表的结构 `detail_goods`
--

CREATE TABLE IF NOT EXISTS `detail_goods` (
  `g_id` int(50) NOT NULL,
  `g_name` varchar(100) NOT NULL,
  `g_num` int(50) NOT NULL,
  `g_comment` varchar(100) NOT NULL,
  `g_src_1` varchar(50) DEFAULT NULL,
  `g_src_2` varchar(50) DEFAULT NULL,
  `g_src_3` varchar(50) DEFAULT NULL,
  `g_src_4` varchar(50) DEFAULT NULL,
  `g_src_5` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `detail_goods`
--

INSERT INTO `detail_goods` (`g_id`, `g_name`, `g_num`, `g_comment`, `g_src_1`, `g_src_2`, `g_src_3`, `g_src_4`, `g_src_5`) VALUES
(1, 'Five Plus新女冬装休闲毛领连帽宽松中长厚羽绒服外套2134334840 彩蓝601 XL', 22, 'Five Plus新女冬装休闲毛领连帽宽松中长厚羽绒服外套.。。', '', '', '', '', '0');

-- --------------------------------------------------------

--
-- 表的结构 `list_goods`
--

CREATE TABLE IF NOT EXISTS `list_goods` (
`id` int(100) NOT NULL,
  `pro_id` int(100) DEFAULT NULL,
  `pro_name` varchar(1000) NOT NULL,
  `pro_price` float(10,2) NOT NULL,
  `pro_num` int(100) DEFAULT NULL,
  `pro_sales` int(100) DEFAULT NULL,
  `pro_service` varchar(1000) DEFAULT NULL,
  `pro_comment` varchar(1000) DEFAULT NULL,
  `pro_src` varchar(1000) DEFAULT NULL,
  `pro_category` varchar(1000) DEFAULT NULL,
  `pro_hot` varchar(1000) DEFAULT NULL,
  `pro_addtime` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='list_goods';

--
-- 转存表中的数据 `list_goods`
--

INSERT INTO `list_goods` (`id`, `pro_id`, `pro_name`, `pro_price`, `pro_num`, `pro_sales`, `pro_service`, `pro_comment`, `pro_src`, `pro_category`, `pro_hot`, `pro_addtime`) VALUES
(1, 1, '韩版宽松bf风短袖t恤女学生圆领字母印花上衣', 455.00, 100, 22, '由Larchy发货并提供售后服务', '这是一款有女人味的衣服，刺绣和同色纽扣彰显精致，融入了蕾丝让你一秒变气质女神，欧范翻领设计加上丝滑的缎面，立显奢华质感~松紧裤腰设计，穿着很方便，工整的包边，体现精致细节~', '../images/listImg/goodsImg (39).jpg', '...', '555', '2017-05-01'),
(2, 2, '纯棉短袖v领T恤女学生宽松夏季韩版半袖前短后长破洞', 555.00, 50, 11, '由Larchy发货并提供售后服务.', '下摆有点有褶皱很喜欢，下身搭配个紧身的牛仔裤或者裙子都很好看，露锁骨的设计师最喜欢的，夏天当然要把最性感的露出来....', '../images/detailImg/detail_show (1).jpg', '0.0.0.0.0.0', '22', '2017-05-02'),
(3, 3, '夏季新款小清新镂空蕾丝喇叭袖刺绣花朵T恤女上衣', 456.00, 200, 100, 'Five Plus新女冬装提供服务。', '宝贝很好，非常满意！没有线头做工挺细的！还不错的吗。。', '../images/listImg/goodsImg (41).jpg', '.。。', '33', '2017-05-02'),
(4, 4, '夏日必备新款宽松简约短袖圆领打底衫女纯白色常规基本款纯棉T恤', 556.00, 50, 20, '【新品】韩版花朵拼接蕾丝七分袖雪纺衫店。', '刚刚打开看了一下，是属于厚的那种面料，不会太透！', '../images/listImg/goodsImg (38).jpg', '女装', '55', '2017-05-04'),
(5, 5, '小宜同款新品短款修身打底针织上衣t恤女潮学生百搭套头打底衫', 255.00, 200, 10, '新女冬装休闲毛领连帽宽松中长厚羽绒服店', '物流很快哦，衣服摸着很舒服是纯棉的大爱，喜欢的可以下手了', '../images/listImg/goodsImg (37).jpg', '女装', '22', '2017-05-03'),
(6, 6, '越简单越好看基本款花束刺绣圆领T恤', 214.00, 220, 20, '【新品】韩版花朵拼接蕾丝七分袖雪纺衫女层层荷叶边衬衫', 's码的衣服，跟男人穿的一样肥大。还有，包裹显示到了好几天了，快递员都没打电话发短信叫取，还得自己联系以为出了什么问题，太差劲', '../images/listImg/goodsImg (27).jpg', '男装', '22', '2017-05-04'),
(7, 7, '2017 韩版新款百搭笑脸徽章刺绣时尚T恤女', 262.00, 300, 20, 'Five Plus新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '不透！纯白！纯棉！质量挺好的！', '../images/listImg/goodsImg (29).jpg', '女装', '33', '2017-05-02'),
(8, 8, '【新品】新款钩花V领透视性感宽松雪纺衫女短款打底吊带衫', 232.00, 100, 22, '【新品】韩版花朵拼接蕾丝七分袖雪纺衫女层层荷叶边衬衫...', '现在才来评价！收到以后非常满意！上身效果也很不错！搭配牛仔短裤简单又好看！版型属于宽松型，之前看很多评价都不太好评，个人收到货以后真心觉得那些说衣服如何如何差的人的一定是你长得不够好看，6666……', '../images/listImg/goodsImg (1).png', '女装', '50', '2017-05-02'),
(9, 9, '夏季2017新款韩版百搭撞色V领露背荷叶袖短袖T恤', 321.00, 20, 11, '新女冬装休闲毛领连帽宽松中长厚羽绒服外套2134334840 彩蓝.。', '很洁白，物美价廉，略短款，打底外穿皆可', '../images/listImg/goodsImg.jpg', '新品', '30', '2017-05-06'),
(10, 10, '2017夏季韩版新款荷叶袖前后V领短袖T恤', 233.00, 100, 12, '新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '价格便宜 商品质量很好 纯棉的 店家服务态度也很好', '../images/listImg/goodsImg (43).jpg', '女装', '11', '2017-06-08'),
(11, 11, 'Larchy新女冬装休闲毛领连帽宽松中长厚羽绒服外套', 299.00, 122, 22, '新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '特别喜欢，这个价钱也刚刚好。 特别喜欢他们家的衣服', '../images/listImg/goodsImg (42).jpg', '新品', '11', '2017-06-09'),
(12, 12, '夏季新款韩范露肩红色衬衣套头一字领衬衫', 333.00, 222, 22, '很不错，新女冬装休闲毛领连帽宽松中长厚羽绒服外套新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '上身效果自己看吧。棒棒哒。不起球。面料很舒服。百搭', '../images/listImg/goodsImg (44).jpg', '新品', '22', '2017-06-01'),
(13, 13, '  碎花雪纺衫 五分袖 荷叶边 宽松 新款', 233.00, 1000, 23, '外套新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '送到宝贝很喜欢，物价所值，下次再来，物流也快?????', '../images/listImg/goodsImg (45).jpg', '女装', '23', '2017-06-05'),
(14, 14, '简约随意不失设计感 舒适透气字母印花弧线下摆T恤', 355.00, 123, 12, '新女冬装休闲毛领连帽宽松中长厚羽绒服外套新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '不错，面料跟舒服，不沾身很凉爽的感觉，一下买了两件', '../images/listImg/goodsImg (46).jpg', '新品', '22', '2017-06-04'),
(15, 15, '2017夏季新品韩版女装短袖网纱拼接一字领露肩衬衫', 233.00, 222, 32, '新女冬装休闲毛领连帽宽松中长厚羽绒服外套新女冬装休闲毛领连帽宽松中长厚羽绒服外套', '帮朋友也买了一件。完全不透。质量很好。洗了也没有变形', '../images/listImg/goodsImg (47).jpg', '女转', '22', '2017-06-05');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
`n_id` int(50) NOT NULL,
  `n_title` varchar(50) NOT NULL,
  `n_content` varchar(50) NOT NULL,
  `n_sender` varchar(50) NOT NULL,
  `n_sendtime` date NOT NULL,
  `n_src` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`n_id`, `n_title`, `n_content`, `n_sender`, `n_sendtime`, `n_src`) VALUES
(1, 'Larchy微商城上线：加盟商的又一盈利火爆点来了！', '深受时尚巨头老佛爷与女魔头宠爱的艾玛沃森，是美丽与智慧并肩的女神，凭借《哈利波特》红遍全球，却在事业', 'jjl', '2017-06-08', '...'),
(2, '十里桃花，不如来一件“印花”.', '十里桃花，不如来一件“印花”，十里桃花，不如来一件“印花”，十里桃花，不如来一件“印花”.', 'jjl', '2017-02-10', '../images/newsImg/news_banner1.jpg'),
(3, '商城上线丨我喊你一声，你敢接了这份圣诞神秘大礼吗..', '商城上线丨我喊你一声，你敢接了这份圣诞神秘大礼吗..商城上线丨我喊你一声，你敢接了这份圣诞神秘大礼吗', 'jjl', '2017-05-11', '../images/newsImg/news_banner1.jpg'),
(4, '春天变成小仙女，从一条裙子开始..', '春天变成小仙女，从一条裙子开始..春天变成小仙女，从一条裙子开始..', 'ly', '2017-04-14', '../images/newsImg/news_banner1.jpg'),
(5, '一日三省，年轻店长圆初梦..', '一日三省，年轻店长圆初梦..一日三省，年轻店长圆初梦..一日三省，年轻店长圆初梦..一日三省，年轻店', 'jjl', '2017-06-16', '../images/newsImg/news_banner1.jpg'),
(6, '爱上自己，活出自己!', '深受时尚巨头老佛爷与女魔头宠爱的艾玛沃森，是美丽与智慧并肩的女神，凭借《哈利波特》红遍全球，却在事业', 'jjl', '2017-05-13', '../images/newsImg/news_banner1.jpg'),
(7, '三月女神特辑:伊顿的魅力，有你们的一份“丽”.', '三月女神特辑:伊顿的魅力，有你们的一份“丽”.三月女神特辑:伊顿的魅力，有你们的一份“丽”.三月女神', 'jjl', '2017-03-24', '../images/newsImg/news_banner1.jpg'),
(8, '她们和E-DONE有个约定...', '她们和E-DONE有个约定...她们和E-DONE有个约定...她们和E-DONE有个约定...她们', 'jjl', '2017-05-27', '../images/newsImg/news_banner1.jpg'),
(9, 'Larchy女神季热辣来袭...', 'Larchy女神季热辣来袭...Larchy女神季热辣来袭...Larchy女神季热辣来袭...La', 'jjl', '2017-04-05', '../images/newsImg/news_banner1.jpg'),
(10, 'Larchy旗下年轻品牌BD强势来袭.', 'Larchy旗下年轻品牌BD强势来袭.Larchy旗下年轻品牌BD强势来袭.Larchy旗下年轻品牌', 'jjl', '2017-05-20', '...'),
(11, '重磅！！！Larchy旗下年轻品牌BD强势来袭.', 'Larchy旗下年轻品牌BD强势来袭.如何精致漂亮地像艾玛沃森一样生活，至少你还缺一样东西——服装！', 'jjl', '2017-06-03', '。。。'),
(12, '嘻嘻！！！Larchy旗下年轻品牌BD强势来袭.', '重磅！！！Larchy旗下年轻品牌BD强势来袭.重磅！！！Larchy旗下年轻品牌BD强势来袭.重磅', 'jjj', '2017-05-03', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `news_ad`
--

CREATE TABLE IF NOT EXISTS `news_ad` (
  `n_ad_id` int(50) NOT NULL,
  `n_ad_title` varchar(50) NOT NULL,
  `n_ad_content` varchar(50) NOT NULL,
  `n_ad_src1` varchar(50) NOT NULL,
  `n_ad_src2` varchar(50) NOT NULL,
  `n_ad_src3` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news_ad`
--

INSERT INTO `news_ad` (`n_ad_id`, `n_ad_title`, `n_ad_content`, `n_ad_src1`, `n_ad_src2`, `n_ad_src3`) VALUES
(1, 'Larchy童装重磅赞助《爸爸的假期》', 'Larchy童装重磅赞助《爸爸的假期》大电影。电影是由王岳伦执导，郭涛、林志颖、 张亮、王岳伦、郭子', '../images/newsImg/news_ad (1).jpg', '../images/newsImg/news_ad (2).jpg', '../images/newsImg/news_ad (3).jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`user_id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` int(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `email`) VALUES
(1, 'jiangjialin', 123456, '352929823@163.com'),
(2, 'liyang', 123456, '767478876@qq.com'),
(3, 'zhangxi', 111, 'zhangxi@qq.com'),
(4, 'jjj', 123456, 'jjl1993@foxmail.com'),
(5, 'jjl', 123456, 'jjl@qq.com'),
(9, '实打实', 123654, '465456423@qq.com');

-- --------------------------------------------------------

--
-- 表的结构 `user_msg`
--

CREATE TABLE IF NOT EXISTS `user_msg` (
`m_id` int(50) NOT NULL,
  `m_user` varchar(50) NOT NULL,
  `m_email` varchar(50) NOT NULL,
  `m_phone` varchar(50) NOT NULL,
  `m_content` varchar(50) NOT NULL,
  `m_identify_code` varchar(50) DEFAULT NULL,
  `m_sendtime` varchar(50) NOT NULL,
  `m_system_user` varchar(50) NOT NULL,
  `m_pic` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_msg`
--

INSERT INTO `user_msg` (`m_id`, `m_user`, `m_email`, `m_phone`, `m_content`, `m_identify_code`, `m_sendtime`, `m_system_user`, `m_pic`) VALUES
(2, '李阳', '767478876@163.com', '13657665390', '这个牌子的衣服太贵了，这个牌子的衣服太贵了，这个牌子的衣服太贵了。。。这个牌子的衣服太贵了，这个牌子', NULL, 'Mon Jun 05 2017 01:07:55 GMT+0800 (中国标准时间)', 'jjl', NULL),
(4, '冉魏', '56324756@foxmail.com', '18632561423', '这家店还不错，商品质量都不错，值得下次再来。这家店还不错，商品质量都不错，值得下次再来。这家店还不错', NULL, 'Mon Jun 05 2017 10:54:01 GMT+0800 (中国标准时间)', 'jjl', NULL),
(5, '严寒', '768202221@163.com', '18936250362', '不错的牌子，衣服质量值得信赖！！！不错的牌子，衣服质量值得信赖！！！不错的牌子，衣服质量值得信赖！！', NULL, 'Mon Jun 05 2017 16:21:01 GMT+0800 (中国标准时间)', 'jjl', NULL),
(6, '李洋', '767478876@qq.com', '13659663698', '这家店不错的，商品质量很好，就是吴物流有点慢！！！！', NULL, 'Tue Jun 06 2017 17:31:14 GMT+0800 (中国标准时间)', 'jiangjialin', NULL),
(7, '孟亚威', '236958@qq.com', '13698745632', '牌子不错！！！质量很好！！！！牌子不错！！！质量很好！！！！牌子不错！！！质量很好！！！！', NULL, 'Tue Jun 06 2017 17:42:20 GMT+0800 (中国标准时间)', 'jiangjialin', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `user_order`
--

CREATE TABLE IF NOT EXISTS `user_order` (
`o_id` int(50) NOT NULL,
  `o_user` varchar(50) NOT NULL,
  `o_user_tel` varchar(50) NOT NULL,
  `o_user_add` varchar(50) NOT NULL,
  `o_remarks` varchar(50) DEFAULT NULL,
  `o_totalmoney` varchar(50) NOT NULL,
  `o_c_user` varchar(50) NOT NULL,
  `o_dealtime` varchar(50) DEFAULT NULL,
  `o_pay_method` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_order`
--

INSERT INTO `user_order` (`o_id`, `o_user`, `o_user_tel`, `o_user_add`, `o_remarks`, `o_totalmoney`, `o_c_user`, `o_dealtime`, `o_pay_method`) VALUES
(17, '蒋佳林', '13678424343', '重庆市巴南区重庆理工大学', '店家麻烦使用顺丰快递！！！谢谢啦。。。。。。', '5006.00', 'jiangjialin', '2017-03-05', NULL),
(23, '李阳', '13657665390', '四川省成都市新津县', '请选择圆通快递，谢谢啦，谢谢啦。。。。', '5474.00', 'jjl', '2017-4-05', NULL),
(24, '冉魏', '13523655236', '湖北省孝感市应城市', '快递快一点，快递快一点，快递快一点，快递快一点。。。。', '6140.00', 'jjl', '2017-05-15', NULL),
(25, '张曦', '18636952365', '河北省保定市阜平县', '店家使用圆通快递！！！！店家使用圆通快递！！！！店家使用圆通快递！！！！店家使用圆通快递！！！！店家', '5778.00', 'jiangjialin', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `advertise`
--
ALTER TABLE `advertise`
 ADD PRIMARY KEY (`ad_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
 ADD UNIQUE KEY `c_g_id` (`c_g_id`), ADD UNIQUE KEY `c_id` (`c_id`);

--
-- Indexes for table `detail_goods`
--
ALTER TABLE `detail_goods`
 ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `list_goods`
--
ALTER TABLE `list_goods`
 ADD UNIQUE KEY `pro_id` (`pro_id`), ADD KEY `id` (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
 ADD UNIQUE KEY `n_id` (`n_id`);

--
-- Indexes for table `news_ad`
--
ALTER TABLE `news_ad`
 ADD UNIQUE KEY `n_ad_id` (`n_ad_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`user_id`), ADD UNIQUE KEY `name` (`username`,`email`);

--
-- Indexes for table `user_msg`
--
ALTER TABLE `user_msg`
 ADD PRIMARY KEY (`m_id`);

--
-- Indexes for table `user_order`
--
ALTER TABLE `user_order`
 ADD PRIMARY KEY (`o_id`), ADD UNIQUE KEY `o_id` (`o_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `advertise`
--
ALTER TABLE `advertise`
MODIFY `ad_id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `list_goods`
--
ALTER TABLE `list_goods`
MODIFY `id` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
MODIFY `n_id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `user_id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user_msg`
--
ALTER TABLE `user_msg`
MODIFY `m_id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `user_order`
--
ALTER TABLE `user_order`
MODIFY `o_id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
