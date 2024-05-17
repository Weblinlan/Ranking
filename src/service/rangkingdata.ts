 interface Ar  {
	id: number;
	name: string;
	tns: any[];
	alias: any[];
}



 interface M {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

 interface L {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

 interface Sq {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

 interface Hr {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

 interface Song {
	name: string;
	id: number;
	pst: number;
	t: number;
	ar: Ar[];
	alia?: any[];
	pop: number;
	st: number;
	rt: string;
	fee: number;
	v: number;
	crbt?: any;
	cf: string;
	al: Al;
	dt: number;
	h: H;
	m: M;
	l: L;
	sq: Sq;
	hr: Hr;
	a?: any;
	cd: string;
	no: number;
	rtUrl?: any;
	ftype: number;
	rtUrls: any[];
	djId: number;
	copyright: number;
	s_id: number;
	mark: number;
	originCoverType: number;
	originSongSimpleData?: any;
	tagPicList?: any;
	resourceState: boolean;
	version: number;
	songJumpInfo?: any;
	entertainmentTags?: any;
	single: number;
	noCopyrightRcmd?: any;
	rtype: number;
	rurl?: any;
	mst: number;
	cp: number;
	mv: number;
	publishTime: number;
	tns: string[];
	alg: string;
}

 interface Banner {
	pic: string;
	targetId: number;
	mainTitle?: any;
	adid?: any;
	targetType: number;
	titleColor: string;
	typeTitle: string;
	url?: any;
	adurlV2?: any;
	exclusive: boolean;
	monitorImpress?: any;
	monitorClick?: any;
	monitorType?: any;
	monitorImpressList: any[];
	monitorClickList: any[];
	monitorBlackList?: any;
	extMonitor?: any;
	extMonitorInfo?: any;
	adSource?: any;
	adLocation?: any;
	encodeId: string;
	program?: any;
	event?: any;
	video?: any;
	dynamicVideoData?: any;
	song: Song;
	bannerId: string;
	alg: string;
	scm: string;
	requestId: string;
	showAdTag: boolean;
	pid?: any;
	showContext?: any;
	adDispatchJson?: any;
	s_ctrp: string;
	logContext?: any;
	bannerBizType: string;
}

 interface ExtInfo {
	banners: Banner[];
}

 interface Block {
	blockCode: string;
	showType: string;
	dislikeShowType: number;
	extInfo: ExtInfo;
	canClose: boolean;
	blockStyle: number;
	canFeedback: boolean;
	blockDemote: boolean;
	sort: number;
}

 interface PageConfig {
	refreshToast: string;
	nodataToast: string;
	refreshInterval: number;
	title?: any;
	fullscreen: boolean;
	abtest: string[];
	songLabelMarkPriority: string[];
	songLabelMarkLimit: number;
	homepageMode: string;
	showModeEntry: boolean;
	orderInfo?: any;
}

 interface GuideToast {
	hasGuideToast: boolean;
	toastList: any[];
}

 interface Data {
	cursor: string;
	blocks: Block[];
	hasMore: boolean;
	blockUUIDs?: any;
	pageConfig: PageConfig;
	guideToast: GuideToast;
	internalTest?: any;
	titles: any[];
	blockCodeOrderList?: any;
	exposedResource: string;
	demote: boolean;
}

 interface Trp {
	rules: string[];
}

interface RootObject {
	code: number;
	data: Data;
	message: string;
	trp: Trp;
}
	

interface Al {
	id: number;
	name: string;
	picUrl: string;
	tns: string[];
	pic_str: string;
	pic: number;
}
interface H {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

interface M {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

interface L {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}

interface Sq {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}
 interface Hr {
	br: number;
	fid: number;
	size: number;
	vd: number;
	sr: number;
}


 interface Banner {
	pic: string;
	targetId: number;
	mainTitle?: any;
	adid?: any;
	targetType: number;
	titleColor: string;
	typeTitle: string;
	url?: any;
	adurlV2?: any;
	exclusive: boolean;
	monitorImpress?: any;
	monitorClick?: any;
	monitorType?: any;
	monitorImpressList: any[];
	monitorClickList: any[];
	monitorBlackList?: any;
	extMonitor?: any;
	extMonitorInfo?: any;
	adSource?: any;
	adLocation?: any;
	encodeId: string;
	program?: any;
	event?: any;
	video?: any;
	dynamicVideoData?: any;
	song: Song;
	bannerId: string;
	alg: string;
	scm: string;
	requestId: string;
	showAdTag: boolean;
	pid?: any;
	showContext?: any;
	adDispatchJson?: any;
	s_ctrp: string;
	logContext?: any;
	bannerBizType: string;
}

interface ExtInfo {
	banners: Banner[];
}

 interface Block {
	blockCode: string;
	showType: string;
	dislikeShowType: number;
	extInfo: ExtInfo;
	canClose: boolean;
	blockStyle: number;
	canFeedback: boolean;
	blockDemote: boolean;
	sort: number;
}

 interface PageConfig {
	refreshToast: string;
	nodataToast: string;
	refreshInterval: number;
	title?: any;
	fullscreen: boolean;
	abtest: string[];
	songLabelMarkPriority: string[];
	songLabelMarkLimit: number;
	homepageMode: string;
	showModeEntry: boolean;
	orderInfo?: any;
}

 interface GuideToast {
	hasGuideToast: boolean;
	toastList: any[];
}

 interface Data {
	cursor: string;
	blocks: Block[];
	hasMore: boolean;
	blockUUIDs?: any;
	pageConfig: PageConfig;
	guideToast: GuideToast;
	internalTest?: any;
	titles: any[];
	blockCodeOrderList?: any;
	exposedResource: string;
	demote: boolean;
}

 interface Trp {
	rules: string[];
}

  interface RootObject {
	code: number;
	data: Data;
	message: string;
	trp: Trp;
}