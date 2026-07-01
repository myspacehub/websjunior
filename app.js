const STORAGE_KEY = "fujian-junior-high-h5-progress-v1";

const COURSE = [
  {
    name: "语文",
    note: "统编初中语文框架",
    volumes: [
      { name: "七年级上册", units: ["第一单元 写景抒情与四季美景", "第二单元 亲情之爱与叙事阅读", "第三单元 学习生活与人物描写", "第四单元 人生思考与散文阅读", "第五单元 生命之趣与说明观察", "第六单元 想象之翼与寓言神话"] },
      { name: "七年级下册", units: ["第一单元 家国情怀与人物精神", "第二单元 家国记忆与抒情表达", "第三单元 平凡人物与细节描写", "第四单元 修身正己与传统美德", "第五单元 哲理思考与托物言志", "第六单元 科幻探险与想象表达"] },
      { name: "八年级上册", units: ["第一单元 新闻阅读与新闻写作", "第二单元 回忆性散文与人物传记", "第三单元 山水游记与文言积累", "第四单元 散文类型阅读", "第五单元 说明文阅读与表达", "第六单元 古诗文阅读与传统文化"] },
      { name: "八年级下册", units: ["第一单元 民俗文化与叙事散文", "第二单元 事理说明与科学精神", "第三单元 古诗文阅读与文化传承", "第四单元 演讲词与活动探究", "第五单元 游记阅读与写作", "第六单元 古诗文阅读与理想情怀"] },
      { name: "九年级上册", units: ["第一单元 诗歌阅读与意象情感", "第二单元 议论文阅读与观点论证", "第三单元 古诗文阅读与山水情怀", "第四单元 小说阅读与人物形象", "第五单元 思辨阅读与创造精神", "第六单元 古代小说与叙事传统"] },
      { name: "九年级下册", units: ["第一单元 现代诗文与时代精神", "第二单元 小说阅读与社会人生", "第三单元 古诗文阅读与家国情怀", "第四单元 戏剧阅读与舞台表达", "第五单元 论述类文本与思辨表达", "第六单元 文学作品综合复习"] },
    ],
  },
  {
    name: "数学",
    note: "人教版初中数学常用章节",
    volumes: [
      { name: "七年级上册", units: ["第一章 有理数", "第二章 整式的加减", "第三章 一元一次方程", "第四章 几何图形初步"] },
      { name: "七年级下册", units: ["第五章 相交线与平行线", "第六章 实数", "第七章 平面直角坐标系", "第八章 二元一次方程组", "第九章 不等式与不等式组", "第十章 数据的收集、整理与描述"] },
      { name: "八年级上册", units: ["第十一章 三角形", "第十二章 全等三角形", "第十三章 轴对称", "第十四章 整式乘法与因式分解", "第十五章 分式"] },
      { name: "八年级下册", units: ["第十六章 二次根式", "第十七章 勾股定理", "第十八章 平行四边形", "第十九章 一次函数", "第二十章 数据分析"] },
      { name: "九年级上册", units: ["第二十一章 一元二次方程", "第二十二章 二次函数", "第二十三章 旋转", "第二十四章 圆", "第二十五章 概率初步"] },
      { name: "九年级下册", units: ["第二十六章 反比例函数", "第二十七章 相似", "第二十八章 锐角三角函数", "第二十九章 投影与视图"] },
    ],
  },
  {
    name: "英语",
    note: "福建常见仁爱版初中英语单元框架",
    volumes: [
      { name: "七年级上册", units: ["Unit 1 Making New Friends", "Unit 2 Looking Different", "Unit 3 Getting Together", "Unit 4 Having Fun"] },
      { name: "七年级下册", units: ["Unit 5 Our School Life", "Unit 6 Our Local Area", "Unit 7 The Birthday Party", "Unit 8 The Seasons and the Weather"] },
      { name: "八年级上册", units: ["Unit 1 Playing Sports", "Unit 2 Keeping Healthy", "Unit 3 Our Hobbies", "Unit 4 Our World"] },
      { name: "八年级下册", units: ["Unit 5 Feeling Excited", "Unit 6 Enjoying Cycling", "Unit 7 Food Festival", "Unit 8 Our Clothes"] },
      { name: "九年级上册", units: ["Unit 1 The Changing World", "Unit 2 Saving the Earth", "Unit 3 English Around the World", "Unit 4 Amazing Science"] },
      { name: "九年级下册", units: ["Unit 5 China and the World", "Unit 6 Entertainment and Friendship", "中考词汇语法综合复习", "中考阅读写作专项复习"] },
    ],
  },
  {
    name: "道德与法治",
    note: "统编道德与法治",
    volumes: [
      { name: "七年级上册", units: ["第一单元 成长的节拍", "第二单元 友谊的天空", "第三单元 师长情谊", "第四单元 生命的思考"] },
      { name: "七年级下册", units: ["第一单元 青春时光", "第二单元 做情绪情感的主人", "第三单元 在集体中成长", "第四单元 走进法治天地"] },
      { name: "八年级上册", units: ["第一单元 走进社会生活", "第二单元 遵守社会规则", "第三单元 勇担社会责任", "第四单元 维护国家利益"] },
      { name: "八年级下册", units: ["第一单元 坚持宪法至上", "第二单元 理解权利义务", "第三单元 人民当家作主", "第四单元 崇尚法治精神"] },
      { name: "九年级上册", units: ["第一单元 富强与创新", "第二单元 民主与法治", "第三单元 文明与家园", "第四单元 和谐与梦想"] },
      { name: "九年级下册", units: ["第一单元 我们共同的世界", "第二单元 世界舞台上的中国", "第三单元 走向未来的少年", "中考时政与主观题综合复习"] },
    ],
  },
  {
    name: "历史",
    note: "统编初中历史",
    volumes: [
      { name: "七年级上册", units: ["史前时期：中国境内早期人类与文明起源", "夏商周时期：早期国家与社会变革", "秦汉时期：统一多民族国家建立和巩固", "三国两晋南北朝时期：政权分立与民族交融"] },
      { name: "七年级下册", units: ["隋唐时期：繁荣与开放的时代", "辽宋夏金元时期：民族关系发展和社会变化", "明清时期：统一多民族国家巩固与发展", "中国古代史综合复习"] },
      { name: "八年级上册", units: ["中国开始沦为半殖民地半封建社会", "近代化的早期探索与民族危机加剧", "资产阶级民主革命与中华民国建立", "新民主主义革命的开始", "从国共合作到国共对立", "中华民族的抗日战争", "人民解放战争", "近代经济社会生活与教育文化"] },
      { name: "八年级下册", units: ["中华人民共和国成立和巩固", "社会主义制度建立与建设探索", "中国特色社会主义道路", "民族团结、祖国统一、国防外交", "科技文化与社会生活"] },
      { name: "九年级上册", units: ["古代亚非文明", "古代欧洲文明", "封建时代的欧洲", "封建时代的亚洲国家", "走向近代", "资本主义制度的初步确立", "工业革命和国际共产主义运动兴起"] },
      { name: "九年级下册", units: ["殖民地人民反抗与资本主义制度扩展", "第二次工业革命和近代科学文化", "第一次世界大战和战后初期世界", "经济大危机和第二次世界大战", "冷战和战后世界格局", "走向和平发展的世界"] },
    ],
  },
  {
    name: "地理",
    note: "人教版初中地理常用框架",
    volumes: [
      { name: "七年级上册", units: ["第一章 地球和地图", "第二章 陆地和海洋", "第三章 天气与气候", "第四章 居民与聚落", "第五章 发展与合作"] },
      { name: "七年级下册", units: ["第六章 我们生活的大洲——亚洲", "第七章 我们邻近的地区和国家", "第八章 东半球其他地区和国家", "第九章 西半球的国家", "第十章 极地地区"] },
      { name: "八年级上册", units: ["第一章 从世界看中国", "第二章 中国的自然环境", "第三章 中国的自然资源", "第四章 中国的经济发展"] },
      { name: "八年级下册", units: ["第五章 中国的地理差异", "第六章 北方地区", "第七章 南方地区", "第八章 西北地区", "第九章 青藏地区", "第十章 中国在世界中"] },
    ],
  },
  {
    name: "生物",
    note: "人教版初中生物常用框架",
    volumes: [
      { name: "七年级上册", units: ["第一单元 生物和生物圈", "第二单元 生物体的结构层次", "第三单元 生物圈中的绿色植物"] },
      { name: "七年级下册", units: ["第一章 人的由来", "第二章 人体的营养", "第三章 人体的呼吸", "第四章 人体内物质的运输", "第五章 人体内废物的排出", "第六章 人体生命活动的调节", "第七章 人类活动对生物圈的影响"] },
      { name: "八年级上册", units: ["第五单元 生物圈中的其他生物", "动物的运动和行为", "动物在生物圈中的作用", "细菌和真菌", "病毒", "生物多样性及其保护"] },
      { name: "八年级下册", units: ["第七单元 生物圈中生命的延续和发展", "生物的生殖和发育", "生物的遗传和变异", "生命起源和生物进化", "第八单元 健康地生活"] },
    ],
  },
  {
    name: "物理",
    note: "人教版初中物理常用框架",
    volumes: [
      { name: "八年级上册", units: ["第一章 机械运动", "第二章 声现象", "第三章 物态变化", "第四章 光现象", "第五章 透镜及其应用", "第六章 质量与密度"] },
      { name: "八年级下册", units: ["第七章 力", "第八章 运动和力", "第九章 压强", "第十章 浮力", "第十一章 功和机械能", "第十二章 简单机械"] },
      { name: "九年级上册", units: ["第十三章 内能", "第十四章 内能的利用", "第十五章 电流和电路", "第十六章 电压 电阻", "第十七章 欧姆定律", "第十八章 电功率"] },
      { name: "九年级下册", units: ["第十九章 生活用电", "第二十章 电与磁", "第二十一章 信息的传递", "第二十二章 能源与可持续发展", "中考实验与计算综合复习"] },
    ],
  },
  {
    name: "化学",
    note: "人教版初中化学常用框架",
    volumes: [
      { name: "九年级上册", units: ["第一单元 走进化学世界", "第二单元 我们周围的空气", "第三单元 物质构成的奥秘", "第四单元 自然界的水", "第五单元 化学方程式", "第六单元 碳和碳的氧化物", "第七单元 燃料及其利用"] },
      { name: "九年级下册", units: ["第八单元 金属和金属材料", "第九单元 溶液", "第十单元 酸和碱", "第十一单元 盐 化肥", "第十二单元 化学与生活", "中考实验探究与计算复习"] },
    ],
  },
];

const SUBJECT_GUIDES = {
  语文: {
    core: ["字词句段篇", "文体特征", "阅读线索", "人物形象", "语言赏析", "写作迁移"],
    methods: ["先读标题和出处", "圈关键词和情感词", "按题型找答题区间", "用模板组织规范答案", "积累课内素材迁移到作文"],
    exam: ["文言文翻译与断句", "现代文阅读概括与赏析", "古诗情感与手法", "作文审题立意与结构"],
    errors: ["只背答案不看文本", "答题缺少术语和文本依据", "作文材料套用生硬", "文言实词语境判断弱"],
    deep: ["读写结合", "传统文化", "家国情怀", "审美表达"],
  },
  数学: {
    core: ["概念定义", "运算法则", "图形性质", "函数关系", "方程思想", "统计概率"],
    methods: ["先写已知和目标", "画图建模", "用方程/函数表达关系", "分类讨论", "验算特殊值和边界"],
    exam: ["计算化简", "方程不等式应用", "几何证明", "函数图像综合", "压轴动点与最值"],
    errors: ["符号和括号丢失", "条件漏用", "图形辅助线盲目", "函数定义域和取值范围忽略"],
    deep: ["数形结合", "转化化归", "方程思想", "分类讨论"],
  },
  英语: {
    core: ["词汇短语", "句型语法", "听说读写", "语篇结构", "主题表达"],
    methods: ["先抓主题和语境", "积累高频搭配", "拆句子主干", "按题型定位信息", "作文先列提纲再写"],
    exam: ["听力信息筛选", "完形语境推断", "阅读细节与主旨", "语法填空", "书面表达"],
    errors: ["只背单词不背搭配", "长难句不找主谓宾", "阅读凭感觉选", "作文时态人称混乱"],
    deep: ["主题语境", "长难句", "词块表达", "跨文化理解"],
  },
  道德与法治: {
    core: ["成长认知", "规则意识", "责任担当", "法治观念", "国家认同", "世界视野"],
    methods: ["先背教材关键词", "材料找主体和行为", "按是什么/为什么/怎么做答题", "联系时政案例", "主观题分点作答"],
    exam: ["选择题价值判断", "材料分析题", "做法建议题", "漫画图表题"],
    errors: ["口语化答题", "脱离材料空喊口号", "主体混乱", "教材术语不准确"],
    deep: ["核心素养", "法治精神", "公共参与", "责任意识"],
  },
  历史: {
    core: ["时间线", "历史人物", "制度变迁", "事件因果", "阶段特征", "史料实证"],
    methods: ["先定时空坐标", "梳理背景-过程-影响", "用时间轴串联", "材料题先读出处和设问", "比较同类事件"],
    exam: ["选择题时空定位", "材料解析", "原因影响评价", "中外对比", "开放探究题"],
    errors: ["时间线混乱", "事件因果倒置", "材料照抄不概括", "评价缺少角度"],
    deep: ["通史脉络", "文明交流", "制度演进", "民族复兴"],
  },
  地理: {
    core: ["地图定位", "自然环境", "人文区位", "区域差异", "人地协调"],
    methods: ["先看图名图例比例尺", "定位区域", "分析自然到人文", "从原因-影响-措施作答", "用地图册复盘"],
    exam: ["经纬网与等值线", "气候地貌水文", "区域综合", "农业工业交通区位", "环境治理"],
    errors: ["不看图例", "区域定位错误", "只背结论不分析条件", "措施题缺少针对性"],
    deep: ["区域认知", "综合思维", "地理实践力", "人地协调观"],
  },
  生物: {
    core: ["结构与功能", "生命活动", "遗传变异", "生态系统", "实验探究"],
    methods: ["先背概念边界", "图表与结构对应", "用变量思想看实验", "把生命现象连到功能", "错题回归教材原文"],
    exam: ["识图填空", "实验探究", "遗传推理", "生态关系", "健康生活应用"],
    errors: ["概念相近混淆", "实验变量不清", "图表信息漏读", "答题语言不规范"],
    deep: ["结构功能观", "稳态调节", "进化适应", "科学探究"],
  },
  物理: {
    core: ["物理量", "模型图像", "公式条件", "实验测量", "能量转化"],
    methods: ["画受力/电路/光路图", "统一单位", "先判断过程再套公式", "实验题写清变量", "用图像理解变化"],
    exam: ["力学计算", "压强浮力", "电路分析", "实验探究", "综合应用题"],
    errors: ["单位不统一", "公式适用条件错", "电路串并联判断错", "受力分析漏力"],
    deep: ["模型建构", "图像思维", "控制变量", "能量观念"],
  },
  化学: {
    core: ["物质组成", "微粒观", "化学反应", "实验操作", "方程式", "生活应用"],
    methods: ["先写物质类别", "从宏观现象到微观解释", "配平方程式", "实验题看目的和装置", "用守恒思想计算"],
    exam: ["化学用语", "实验探究", "物质推断", "方程式计算", "酸碱盐综合"],
    errors: ["化学式写错", "方程式未配平", "实验现象和结论混淆", "质量守恒用错"],
    deep: ["宏微符三重表征", "实验探究", "守恒思想", "绿色化学"],
  },
};

const LEARNING_METHODS = [
  {
    title: "知识学习：预习—课堂—复盘闭环",
    summary: "初中学习最怕“听懂但不会用”。每节课用 10–20 分钟轻预习，课堂抓老师的解题逻辑，课后用大白话讲出来。",
    steps: ["课前圈出标题、概念、不会的问题", "课堂优先听方法和例题思路", "课后合上书讲一遍：是什么、怎么用、易错在哪"],
  },
  {
    title: "刷题复盘：错题比新题更值钱",
    summary: "初中题型重复率高，真正提分来自“同类题不再错”。错题只记考点、错因、标准步骤和下次提醒。",
    steps: ["当天订正错题", "隔天重做同类题", "周末按学科整理高频错因", "考前只看错题和薄弱章节"],
  },
  {
    title: "时间管理：校内清基础，晚上补短板",
    summary: "把基础作业尽量在校完成，晚上留给薄弱学科、错题复盘和阅读背诵。短时间专注比长时间磨蹭有效。",
    steps: ["早读背语文英语和道法历史", "晚间做数学物理化学深度题", "25 分钟专注 + 5 分钟休息", "睡前列明天 3 个任务"],
  },
  {
    title: "身心状态：稳住节奏，减少内耗",
    summary: "初中阶段变化快，成绩波动很正常。把考试当体检，找到漏洞、补齐漏洞，就是进步。",
    steps: ["不和别人比，只和昨天的自己比", "每天运动或拉伸 10–20 分钟", "拖延时先做 10 分钟", "压力大时把焦虑写成具体任务"],
  },
];

const VIDEO_RESOURCES = {
  语文: [
    ["学过石油的语文老师", "基础 / 预习 / 提分", "文言文、现代文阅读、作文模板，适合基础弱和初高衔接。"],
    ["中文系五匪子", "作文专项", "议论文立意、结构模板、审题表达。"],
    ["国家玮", "拔高 / 文学思维", "文本深读和大阅读提升。"],
  ],
  数学: [
    ["一数", "基础体系", "初高衔接、初中数学主干和中考复习都可检索。"],
    ["数学微课帮", "同步查漏", "单章节补洞和校内同步巩固。"],
    ["佟大大还是ETT", "拔高模型", "函数、几何和压轴题模型可作为提高补充。"],
  ],
  英语: [
    ["英语兔", "语法入门", "语法、音标、词根词缀和长难句底层逻辑。"],
    ["Free高考英语", "阅读拔高", "阅读逻辑和长难句拆解可向中考阅读迁移。"],
    ["瑞秋Rachel", "听口语感", "发音、听力和口语输入。"],
  ],
  道德与法治: [
    ["刘勖雯", "应试模板", "选择题排除、主观题分点表达。"],
    ["咕噜咕噜将", "教材串讲", "适合先过教材原文和知识框架。"],
    ["共青团中央", "时政素材", "青年责任、国家治理、社会热点素材。"],
  ],
  历史: [
    ["历史老师定哥", "体系速通", "时间线、思维导图、答题模板。"],
    ["讲历史的张老师", "理解因果", "按朝代和专题理解事件背景。"],
    ["段sir是懂王", "兴趣预习", "趣味梳理历史事件，适合预习。"],
  ],
  地理: [
    ["安迎老师", "地理原理", "地图、等值线、区域地理底层逻辑。"],
    ["张艳平地理", "应试模板", "真题拆解和大题答题结构。"],
    ["羊羊的地理教室", "同步补缺", "细碎知识点归纳。"],
  ],
  生物: [
    ["汉水丑生侯伟", "教材体系", "逐句梳理教材、图文导图。"],
    ["李林生物", "边学边练", "知识点结合习题巩固。"],
    ["万猛生物", "考前话术", "高频考点和主观题表达。"],
  ],
  物理: [
    ["黄夫人HuangFuRen", "入门基础", "受力、运动、电学等抽象模型生活化。"],
    ["于总CEO", "整册框架", "先搭整本书脉络，再拆知识点。"],
    ["坤哥物理", "专项应试", "电学、实验题、计算题技巧。"],
  ],
  化学: [
    ["一化儿", "零基础同步", "课本逐课精讲、方程式和概念拆解。"],
    ["化学超人", "一轮体系", "考点分类复盘和刷题讲解。"],
    ["真·凤舞九天", "兴趣实验", "用实验现象理解反应过程。"],
  ],
};

const state = { subjectIndex: 0, volumeIndex: 0, query: "", mode: "catalog" };
let doneSet = readProgress();

const $ = (selector) => document.querySelector(selector);
const subjectList = $("#subjectList");
const volumeTabs = $("#volumeTabs");
const unitList = $("#unitList");
const breadcrumb = $("#breadcrumb");
const stats = $("#stats");
const subjectCount = $("#subjectCount");
const searchInput = $("#searchInput");
const resetBtn = $("#resetBtn");
const modeSwitch = $("#modeSwitch");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text) {
  const safe = escapeHTML(text);
  const q = state.query.trim();
  if (!q) return safe;
  return safe.replace(new RegExp(escapeRegExp(escapeHTML(q)), "gi"), (match) => `<mark>${match}</mark>`);
}

function containsQuery(...fields) {
  const q = state.query.trim().toLowerCase();
  if (!q) return true;
  return fields.some((field) => String(field).toLowerCase().includes(q));
}

function readProgress() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  } catch {
    return new Set();
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...doneSet]));
}

function keyFor(subjectIndex, volumeIndex, unitIndex) {
  return `${subjectIndex}-${volumeIndex}-${unitIndex}`;
}

function hidePageLoader() {
  const loader = $("#pageLoader");
  if (!loader) return;
  loader.classList.add("is-hidden");
  window.setTimeout(() => loader.remove(), 420);
}

function totals() {
  const volumes = COURSE.reduce((sum, subject) => sum + subject.volumes.length, 0);
  const units = COURSE.reduce((sum, subject) => sum + subject.volumes.reduce((inner, volume) => inner + volume.units.length, 0), 0);
  const nodes = units * 24;
  return { subjects: COURSE.length, volumes, units, nodes, done: doneSet.size };
}

function guideFor(subjectName) {
  return SUBJECT_GUIDES[subjectName] || SUBJECT_GUIDES.语文;
}

function progressForSubject(subjectIndex) {
  const subject = COURSE[subjectIndex];
  const total = subject.volumes.reduce((sum, volume) => sum + volume.units.length, 0);
  let done = 0;
  subject.volumes.forEach((volume, volumeIndex) => {
    volume.units.forEach((_, unitIndex) => {
      if (doneSet.has(keyFor(subjectIndex, volumeIndex, unitIndex))) done += 1;
    });
  });
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function renderStats() {
  const t = totals();
  const percent = t.units ? Math.round((t.done / t.units) * 100) : 0;
  stats.innerHTML = [
    ["学科", t.subjects],
    ["分册", t.volumes],
    ["章节 / 单元", t.units],
    ["导图节点", t.nodes],
    ["学习方法", `${LEARNING_METHODS.length} 板块`],
    ["B站资源", "分档推荐"],
    ["完成进度", `${percent}%`],
  ].map(([label, value]) => `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`).join("");
}

function renderModeSwitch() {
  modeSwitch.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderSubjects() {
  subjectCount.textContent = `${COURSE.length} 科`;
  subjectList.innerHTML = COURSE.map((subject, subjectIndex) => {
    const p = progressForSubject(subjectIndex);
    const active = subjectIndex === state.subjectIndex && state.mode !== "methods" && (state.mode === "videos" || !state.query) ? " is-active" : "";
    return `<button class="subject-btn${active}" type="button" data-subject-index="${subjectIndex}"><b>${escapeHTML(subject.name)}</b><span>${p.done}/${p.total}</span></button>`;
  }).join("");
}

function renderBreadcrumb() {
  const subject = COURSE[state.subjectIndex];
  const p = progressForSubject(state.subjectIndex);
  breadcrumb.innerHTML = `
    <div>
      <h2>${escapeHTML(subject.name)}</h2>
      <p>${escapeHTML(subject.note)} · ${subject.volumes.length} 个分册 · ${p.total} 个章节</p>
    </div>
    <div class="progress-ring"><strong>${p.percent}%</strong><span>${p.done}/${p.total} 已学</span></div>
  `;
}

function renderVolumeTabs() {
  const subject = COURSE[state.subjectIndex];
  volumeTabs.hidden = false;
  volumeTabs.innerHTML = subject.volumes.map((volume, volumeIndex) => {
    const active = volumeIndex === state.volumeIndex ? " is-active" : "";
    return `<button class="volume-tab${active}" type="button" data-volume-index="${volumeIndex}">${escapeHTML(volume.name)}</button>`;
  }).join("");
}

function hideVolumeTabs() {
  volumeTabs.hidden = true;
  volumeTabs.innerHTML = "";
}

function unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volumeName) {
  const id = keyFor(subjectIndex, volumeIndex, unitIndex);
  const checked = doneSet.has(id);
  return `
    <label class="unit">
      <input type="checkbox" data-progress-key="${id}" ${checked ? "checked" : ""} />
      <span class="unit__title">${highlight(unit)}</span>
      <span class="unit__meta">${highlight(volumeName)}</span>
    </label>
  `;
}

function volumeCardHTML(subjectIndex, volumeIndex) {
  const subject = COURSE[subjectIndex];
  const volume = subject.volumes[volumeIndex];
  return `
    <article class="volume-card">
      <div class="volume-card__head">
        <h3>${escapeHTML(volume.name)}</h3>
        <small>${volume.units.length} 项</small>
      </div>
      <div class="units">
        ${volume.units.map((unit, unitIndex) => unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volume.name)).join("")}
      </div>
    </article>
  `;
}

function profileFor(subjectName, volumeName, unitName) {
  const guide = guideFor(subjectName);
  return [
    ["核心知识框架", [`本章主题：${unitName}`, `所在分册：${volumeName}`, ...guide.core]],
    ["方法模型", guide.methods],
    ["常考题型与应用", guide.exam],
    ["易错点与诊断", guide.errors],
    ["专题深化 / 学科关键词", guide.deep],
  ];
}

function mindMapCardHTML(subjectIndex, volumeIndex, unitIndex) {
  const subject = COURSE[subjectIndex];
  const volume = subject.volumes[volumeIndex];
  const unit = volume.units[unitIndex];
  return `
    <article class="mindmap-card">
      <div class="mindmap-root">
        <span class="tag">${escapeHTML(subject.name)} · ${escapeHTML(volume.name)}</span>
        <h3>${highlight(unit)}</h3>
        <p>把章节内容拆成知识框架、方法模型、题型应用、易错诊断和专题关键词，便于预习、复习和错题回填。</p>
      </div>
      <div class="mindmap-branches">
        ${profileFor(subject.name, volume.name, unit).map(([title, points]) => `
          <details class="mindmap-branch" open>
            <summary>${escapeHTML(title)}</summary>
            <ul>${points.map((point) => `<li>${highlight(point)}</li>`).join("")}</ul>
          </details>
        `).join("")}
      </div>
    </article>
  `;
}

function mindMapListHTML(subjectIndex, volumeIndex, matchedUnits = null) {
  const volume = COURSE[subjectIndex].volumes[volumeIndex];
  const units = matchedUnits || volume.units.map((unit, unitIndex) => ({ unit, unitIndex }));
  return `<div class="mindmap-list">${units.map(({ unitIndex }) => mindMapCardHTML(subjectIndex, volumeIndex, unitIndex)).join("")}</div>`;
}

function subjectNetworkHTML(subjectIndex) {
  const subject = COURSE[subjectIndex];
  const guide = guideFor(subject.name);
  return `
    <div class="subject-network">
      <article class="network-hero">
        <span class="tag">跨册总图</span>
        <h3>${escapeHTML(subject.name)} 全学段知识关系网</h3>
        <p>按年级分册串联主线，复习时先看主线，再回到章节补漏洞。</p>
      </article>
      <section class="network-section">
        <div class="section-head"><h3>分册路线</h3><p>从七年级基础到九年级中考综合。</p></div>
        <div class="roadmap">
          ${subject.volumes.map((volume, index) => `
            <article>
              <b>${index + 1}. ${escapeHTML(volume.name)}</b>
              <p>${volume.units.map(escapeHTML).join(" → ")}</p>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="network-section">
        <div class="section-head"><h3>学科能力主线</h3><p>这些能力会跨章节反复出现。</p></div>
        <div class="topic-grid">
          ${[
            ["核心概念", guide.core],
            ["方法模型", guide.methods],
            ["考试题型", guide.exam],
            ["易错诊断", guide.errors],
          ].map(([title, points]) => `<article><h4>${escapeHTML(title)}</h4><ul>${points.map((p) => `<li>${escapeHTML(p)}</li>`).join("")}</ul></article>`).join("")}
        </div>
      </section>
    </div>
  `;
}

function methodHTML() {
  hideVolumeTabs();
  breadcrumb.innerHTML = `<div><h2>学习方法</h2><p>适合普通初中生照搬执行的学习闭环。</p></div><div class="progress-ring"><strong>${LEARNING_METHODS.length}</strong><span>板块</span></div>`;
  unitList.innerHTML = `
    <div class="method-page">
      <article class="method-hero">
        <span class="tag">初中高效学习法</span>
        <h3>不拼熬夜，拼流程、复盘和稳定状态</h3>
        <p>把课前预习、课堂听懂、课后讲出、错题复盘和时间管理做成固定动作。</p>
      </article>
      <section class="method-grid">
        ${LEARNING_METHODS.filter((block) => containsQuery(block.title, block.summary, ...block.steps)).map((block, index) => `
          <article class="method-card">
            <div class="method-card__head"><span class="tag">0${index + 1}</span><h3>${highlight(block.title)}</h3><p>${highlight(block.summary)}</p></div>
            <ol>${block.steps.map((step) => `<li>${highlight(step)}</li>`).join("")}</ol>
          </article>
        `).join("")}
      </section>
    </div>
  `;
}

function biliSearchUrl(keyword) {
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
}

function biliUpSearchUrl(keyword) {
  return `https://search.bilibili.com/upuser?keyword=${encodeURIComponent(keyword)}`;
}

function videoHTML() {
  const subject = COURSE[state.subjectIndex];
  const volume = subject.volumes[state.volumeIndex];
  const resources = VIDEO_RESOURCES[subject.name] || [];
  const units = volume.units.filter((unit) => containsQuery(subject.name, volume.name, unit, ...resources.flat()));
  renderVolumeTabs();
  breadcrumb.innerHTML = `
    <div><h2>${escapeHTML(subject.name)} · B站视频资源</h2><p>${escapeHTML(volume.name)} · 章节搜索只使用章节标题本身，避免关键词过长。</p></div>
    <div class="progress-ring"><strong>${resources.length}</strong><span>UP推荐</span></div>
  `;
  unitList.innerHTML = `
    <div class="video-page">
      <article class="video-hero">
        <span class="tag">分档 UP 推荐</span>
        <h3>${escapeHTML(subject.name)}：基础 / 拔高 / 应试全覆盖</h3>
        <p>先选适合自己的 UP，再按当前分册章节点开搜索。章节链接只搜“章节标题”，例如“第4章 细胞的物质输入和输出”。</p>
      </article>
      <section class="up-grid">
        ${resources.map(([name, level, summary]) => `
          <article class="up-card">
            <div><strong>${highlight(name)}</strong><span>${highlight(level)}</span></div>
            <p>${highlight(summary)}</p>
            <a href="${escapeHTML(biliUpSearchUrl(name))}" target="_blank" rel="noopener noreferrer">搜索 UP</a>
          </article>
        `).join("")}
      </section>
      <section class="video-syllabus">
        <div class="section-head"><h3>按当前分册章节找视频</h3><p>${escapeHTML(volume.name)} · ${units.length}/${volume.units.length} 项</p></div>
        <div class="video-links">
          ${units.length ? units.map((unit) => `<a href="${escapeHTML(biliSearchUrl(unit))}" target="_blank" rel="noopener noreferrer">${highlight(unit)}</a>`).join("") : `<div class="empty">当前搜索没有匹配章节，可清空搜索或切换分册。</div>`}
        </div>
      </section>
      <section class="video-tips">
        <h3>选课小建议</h3>
        <ul>
          <li>基础薄弱/预习：先看系统课和教材串讲，别直接刷压轴题。</li>
          <li>中等提分/专项刷题：围绕错题找同类视频，学完立刻重做错题。</li>
          <li>中考冲刺/拔高：优先看题型归纳、答题模板、真题讲解。</li>
          <li>零散短视频适合碎片化复盘，系统合集课适合完整补基础。</li>
        </ul>
      </section>
    </div>
  `;
}

function getSearchResults() {
  const groups = [];
  COURSE.forEach((subject, subjectIndex) => {
    subject.volumes.forEach((volume, volumeIndex) => {
      const matchedUnits = volume.units.map((unit, unitIndex) => ({ unit, unitIndex })).filter(({ unit }) => containsQuery(subject.name, volume.name, unit));
      if (matchedUnits.length) groups.push({ subject, subjectIndex, volume, volumeIndex, matchedUnits });
    });
  });
  return groups;
}

function searchHTML() {
  const groups = getSearchResults();
  hideVolumeTabs();
  breadcrumb.innerHTML = `<div><h2>搜索结果</h2><p>关键词「${escapeHTML(state.query)}」共匹配 ${groups.reduce((sum, group) => sum + group.matchedUnits.length, 0)} 项</p></div>`;
  unitList.innerHTML = groups.length
    ? groups.map(({ subject, subjectIndex, volume, volumeIndex, matchedUnits }) => `
        <article class="volume-card">
          <div class="volume-card__head"><h3>${highlight(subject.name)} · ${highlight(volume.name)}</h3><small>${matchedUnits.length} 项</small></div>
          <div class="units">${matchedUnits.map(({ unit, unitIndex }) => state.mode === "mindmap" ? mindMapCardHTML(subjectIndex, volumeIndex, unitIndex) : unitHTML(subjectIndex, volumeIndex, unit, unitIndex, volume.name)).join("")}</div>
        </article>
      `).join("")
    : `<div class="empty">没有找到匹配内容，可换一个关键词。</div>`;
}

function renderCurrent() {
  if (state.mode === "methods") return methodHTML();
  if (state.mode === "videos") return videoHTML();
  renderBreadcrumb();
  volumeTabs.hidden = state.mode === "subjectMap";
  if (state.mode !== "subjectMap") renderVolumeTabs();
  unitList.innerHTML = state.mode === "subjectMap"
    ? subjectNetworkHTML(state.subjectIndex)
    : state.mode === "mindmap"
      ? mindMapListHTML(state.subjectIndex, state.volumeIndex)
      : volumeCardHTML(state.subjectIndex, state.volumeIndex);
}

function render() {
  renderStats();
  renderModeSwitch();
  renderSubjects();
  if (state.query.trim() && !["methods", "videos", "subjectMap"].includes(state.mode)) searchHTML();
  else renderCurrent();
}

subjectList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-subject-index]");
  if (!button) return;
  state.subjectIndex = Number(button.dataset.subjectIndex);
  state.volumeIndex = 0;
  if (state.mode === "methods") state.mode = "catalog";
  state.query = "";
  searchInput.value = "";
  render();
});

volumeTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-volume-index]");
  if (!button) return;
  state.volumeIndex = Number(button.dataset.volumeIndex);
  render();
});

modeSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  render();
});

unitList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-progress-key]");
  if (!checkbox) return;
  if (checkbox.checked) doneSet.add(checkbox.dataset.progressKey);
  else doneSet.delete(checkbox.dataset.progressKey);
  saveProgress();
  render();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

resetBtn.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  render();
  searchInput.focus();
});

try {
  render();
} finally {
  hidePageLoader();
}
