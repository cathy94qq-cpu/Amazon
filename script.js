const conversations = {
  ads: {
    title: "亚马逊广告投放诊断",
    mode: "快速模式",
    question: "我的亚马逊广告最近 ACOS 持续升高，点击量有但转化下降。请帮我诊断可能原因，并给出一套可以马上执行的优化方案。",
    answer: `
      <p>这条广告问题的核心信息是：<strong>流量还在，但购买意图和承接效率变弱</strong>。先不要只看 ACOS 本身，要把它拆成关键词质量、Listing 承接、竞价结构和预算节奏四个层面。</p>
      <p>建议先按“止损、分层、放量”的顺序处理。下面给出一套适合亚马逊广告账户的快速诊断方案。</p>
      <h2>方案一：先做 72 小时止损检查</h2>
      <h3>检查重点：</h3>
      <ul>
        <li><strong>高花费无订单词：</strong>筛选过去 7-14 天花费超过目标 CPA 1.5 倍、但没有订单的搜索词，优先否定或降价。</li>
        <li><strong>低转化 ASIN 定向：</strong>如果商品页点击多但转化低，说明竞品页面价格、评分或卖点更强，需要暂停或单独降价测试。</li>
        <li><strong>预算消耗时间：</strong>如果上午就花完预算，晚间高转化时段拿不到曝光，先降低大词竞价，把预算留给转化词。</li>
      </ul>
      <h2>方案二：重新拆分广告结构</h2>
      <p>推荐拆成三组：<strong>精准盈利组、探索拓词组、防守品牌组</strong>。盈利组只放已验证转化词；探索组控制预算上限；品牌组保护品牌词和核心 ASIN。</p>
      <h2>方案三：检查 Listing 承接能力</h2>
      <p>如果点击没有问题但转化变差，广告只是把问题放大了。请重点检查价格、Coupon、评分、Review 数量、首图清晰度、五点描述是否覆盖核心购买顾虑。</p>
    `,
  },
  inventory: {
    title: "FBA库存周转优化建议",
    mode: "专家模式",
    question: "FBA库存周转变慢，有几款 SKU 库存积压。请给我一个清理库存和避免断货的方案。",
    answer: `
      <p>库存问题要同时看两个目标：<strong>积压 SKU 降低仓储成本</strong>，以及<strong>高动销 SKU 避免断货</strong>。建议按 SKU 分层处理。</p>
      <h2>库存分层策略</h2>
      <ul>
        <li><strong>A 类：</strong>30 天销量稳定且利润健康，保持 45-60 天安全库存。</li>
        <li><strong>B 类：</strong>销量波动但仍有转化，配合 Coupon 和广告再测试 14 天。</li>
        <li><strong>C 类：</strong>超过 90 天周转慢，优先做清仓、捆绑或移除。</li>
      </ul>
    `,
  },
  listing: {
    title: "Listing标题关键词重构",
    mode: "快速模式",
    question: "请帮我重构一个更适合亚马逊搜索和转化的 Listing 标题结构。",
    answer: `
      <p>标题建议遵循：<strong>核心关键词 + 关键卖点 + 适用场景 + 规格属性</strong>。不要堆词，要让买家一眼理解产品是什么、解决什么问题。</p>
      <h2>推荐结构</h2>
      <p>Brand + Primary Keyword + Main Benefit + Material/Size/Compatibility + Use Case</p>
    `,
  },
  reviews: {
    title: "竞品评论痛点整理",
    mode: "专家模式",
    question: "整理竞品差评里的主要痛点，并转化成我们的产品优化方向。",
    answer: `
      <p>竞品差评最有价值的是反复出现的购买落差。建议把评论按质量、尺寸、使用门槛、售后和包装五类归因。</p>
      <h2>可转化方向</h2>
      <ul>
        <li>把高频抱怨改成主图卖点，例如“安装更快”“尺寸更准”。</li>
        <li>把误解点写进五点描述，减少不匹配订单。</li>
        <li>把竞品未解决的问题做成 QA 和视频演示。</li>
      </ul>
    `,
  },
  weekly: {
    title: "产品运营一周计划整理",
    mode: "快速模式",
    question: "帮我整理下周亚马逊产品运营计划，重点包含广告、Listing、库存和复盘。",
    answer: `
      <p>下周计划可以按工作日拆成四条主线：广告控效、Listing 转化、库存安全和数据复盘。</p>
      <h2>一周安排</h2>
      <ul>
        <li>周一：拉取广告搜索词报告，处理高花费低转化词。</li>
        <li>周二：优化主图、标题和五点描述中的核心卖点。</li>
        <li>周三：检查 FBA 可售天数和补货节点。</li>
        <li>周五：汇总利润、ACOS、CVR，确定下周预算。</li>
      </ul>
    `,
  },
  cathyProjectCount: {
    title: "Cathy项目聊天数量",
    mode: "快速模式",
    question: "cathy 项目下的聊天有几条？请帮我快速整理项目内聊天记录。",
    answer: `
      <p>cathy 项目当前展示了 <strong>2 条聊天记录</strong>，分别是项目聊天数量统计和 ima Copilot Skill 介绍。</p>
      <h2>聊天记录概览</h2>
      <ul>
        <li><strong>Cathy项目聊天数量：</strong>用于查看项目内聊天数量、最近更新时间和项目沟通概况。</li>
        <li><strong>ima Copilot Skill 介绍：</strong>用于沉淀 Skill 能力说明、适用场景和后续接入建议。</li>
      </ul>
      <p>建议后续把 Cathy 项目中的运营讨论、Skill 使用说明和复盘内容按主题归档，方便团队快速检索。</p>
    `,
  },
  imaSkillIntro: {
    title: "ima Copilot Skill 介绍",
    mode: "专家模式",
    question: "请介绍 ima Copilot Skill 的能力、适用场景以及接入建议。",
    answer: `
      <p>ima Copilot Skill 可以作为项目内的知识和任务助手，帮助团队把常用流程、分析模板和项目经验沉淀成可复用能力。</p>
      <h2>适用场景</h2>
      <ul>
        <li>整理项目资料、会议纪要和运营复盘。</li>
        <li>快速生成标准化的分析框架与执行清单。</li>
        <li>辅助团队成员查找项目背景、历史结论和下一步动作。</li>
      </ul>
    `,
  },
};

const featuredExamples = {
  acos: {
    title: "亚马逊广告 ACOS 异常升高怎么办？",
    category: "运营分析 · 3001",
    question: "亚马逊广告 ACOS 最近突然升高，点击量没有明显下降，但订单减少。应该从哪些方向排查？",
    answer: `
      <p>ACOS 异常升高通常不是单一原因造成的，可以先判断是<strong>流量质量变差</strong>，还是<strong>Listing 承接转化变弱</strong>。</p>
      <h2>优先排查顺序</h2>
      <ul>
        <li>查看搜索词报告，找出高花费无订单词，先降价或否定。</li>
        <li>检查核心转化词排名是否被竞品抢走，必要时单独建精准广告组保护。</li>
        <li>复查价格、Coupon、评分、Review 数量和首图是否近期发生变化。</li>
        <li>拆分自动广告和手动广告预算，避免探索流量吞掉盈利词预算。</li>
      </ul>
      <p>建议用 3 天做止损，7 天观察恢复趋势，再决定是否继续放量。</p>
    `,
  },
  listing: {
    title: "如何重构标题与五点描述提升转化？",
    category: "生成方案 · 2686",
    question: "Listing 有曝光但转化一般，标题和五点描述应该怎么重构？",
    answer: `
      <p>标题负责搜索入口，五点描述负责说服购买。优化时不要堆关键词，而是把关键词和购买理由组合起来。</p>
      <h2>推荐结构</h2>
      <ul>
        <li>标题：核心关键词 + 关键卖点 + 规格/适用场景。</li>
        <li>五点：痛点、差异化、使用方式、材质规格、售后保障。</li>
        <li>把竞品差评里的高频顾虑写进五点，减少买家犹豫。</li>
      </ul>
    `,
  },
  inventory: {
    title: "FBA 库存积压如何制定清仓节奏？",
    category: "生成报告 · 2557",
    question: "FBA 库存积压，既想减少仓储费，又不想亏太多，应该怎么安排清仓？",
    answer: `
      <p>库存清理要先按库龄和毛利分层，不建议所有 SKU 同时大幅降价。</p>
      <h2>清仓节奏</h2>
      <ul>
        <li>30-60 天库存：先用 Coupon 和精准广告测试需求。</li>
        <li>60-90 天库存：组合折扣、捆绑销售，降低广告预算。</li>
        <li>90 天以上库存：优先清仓、移除或站外促销。</li>
      </ul>
      <p>同时保留利润健康的 SKU 预算，避免为了清库存牺牲主力产品增长。</p>
    `,
  },
  reviews: {
    title: "如何从竞品差评中提炼产品卖点？",
    category: "生成策略 · 6482",
    question: "竞品评论很多，如何快速从差评中找到能转化成我们卖点的内容？",
    answer: `
      <p>竞品差评是买家未被满足的需求库。建议按“问题频率”和“改进可行性”两个维度筛选。</p>
      <h2>提炼方法</h2>
      <ul>
        <li>把差评分成质量、尺寸、安装、包装、售后、使用体验六类。</li>
        <li>找出出现 5 次以上的具体问题，转化成产品改进点。</li>
        <li>把我们能解决的问题放到主图、五点描述和 A+ 页面中。</li>
      </ul>
    `,
  },
};

const fallbackConversation = {
  title: "运营问题分析",
  mode: "快速模式",
  question: "请基于当前主题给出可执行的分析和优化建议。",
  answer: `
    <p>这个主题可以先从现状、风险、机会和下一步动作四个角度拆解。WinWise 会优先给出能直接执行的运营建议。</p>
    <h2>建议处理方式</h2>
    <ul>
      <li>先确认目标指标，例如转化率、利润率、库存周转或广告 ACOS。</li>
      <li>再找出影响指标的 2-3 个关键变量。</li>
      <li>最后用小步测试验证，不要一次性改动过多因素。</li>
    </ul>
  `,
};

const sourceBadge = `
  <div class="read-summary">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m2.3-5.2a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" /></svg>
    <span>已阅读 10 个网页</span>
    <span class="source-dot">A</span>
    <span class="source-dot dark">C</span>
    <span class="source-dot blue">W</span>
  </div>
`;

const sourcePill = `
  <div class="source-pill">
    <span class="source-dot">A</span>
    <span class="source-dot dark">C</span>
    <span class="source-dot blue">W</span>
    <span>10 个网页</span>
  </div>
`;

const sidebar = document.querySelector("#sidebar");
const contextMenu = document.querySelector("#contextMenu");
const loginModal = document.querySelector("#loginModal");
const openLogin = document.querySelector("#openLogin");
const profileLogin = document.querySelector("#profileLogin");
const profileName = document.querySelector("#profileName");
const closeLogin = document.querySelector("#closeLogin");
const loginForm = document.querySelector("#loginForm");
const googleLogin = document.querySelector("#googleLogin");
const composer = document.querySelector("#composer");
const promptInput = document.querySelector("#promptInput");
const messages = document.querySelector("#messages");
const chatStage = document.querySelector("#chatStage");
const examplesView = document.querySelector("#examplesView");
const exploreMoreExamples = document.querySelector("#exploreMoreExamples");
const backToNewChat = document.querySelector("#backToNewChat");
const conversationTitle = document.querySelector("#conversationTitle");
const conversationMode = document.querySelector("#conversationMode");
const welcomeTitle = document.querySelector("#welcomeTitle");
const welcomeSubtitle = document.querySelector(".welcome-subtitle");
const pinActionText = document.querySelector("#pinActionText");
const deleteDialog = document.querySelector("#deleteDialog");
const shareDialog = document.querySelector("#shareDialog");
const renameDialog = document.querySelector("#renameDialog");
const renameInput = document.querySelector("#renameInput");
const shareResult = document.querySelector("#shareResult");
const shareUrl = document.querySelector("#shareUrl");
const createShare = document.querySelector("#createShare");
const copyShare = document.querySelector("#copyShare");
const headerShare = document.querySelector("#headerShare");
const pinnedSection = document.querySelector(".chat-history section:first-child");
const todaySection = document.querySelector(".chat-history section:nth-child(2)");
const openSearch = document.querySelector("#openSearch");
const openSkills = document.querySelector("#openSkills");
const openProjects = document.querySelector("#openProjects");
const openLibraryCreate = document.querySelector("#openLibraryCreate");
const uploadSkillButton = document.querySelector("#uploadSkillButton");
const uploadSkillDialog = document.querySelector("#uploadSkillDialog");
const closeUploadSkill = document.querySelector("#closeUploadSkill");
const expertDialog = document.querySelector("#expertDialog");
const closeExpertDialog = document.querySelector("#closeExpertDialog");
const expertDialogIcon = document.querySelector("#expertDialogIcon");
const expertDialogTitle = document.querySelector("#expertDialogTitle");
const expertDialogCategory = document.querySelector("#expertDialogCategory");
const expertDialogIntro = document.querySelector("#expertDialogIntro");
const expertDialogSources = document.querySelector("#expertDialogSources");
const expertDialogStrengths = document.querySelector("#expertDialogStrengths");
const expertDialogPrompts = document.querySelector("#expertDialogPrompts");
const callExpertButton = document.querySelector("#callExpertButton");
const activeExpertPill = document.querySelector("#activeExpertPill");
const activeExpertName = document.querySelector("#activeExpertName");
const createLibraryDialog = document.querySelector("#createLibraryDialog");
const closeLibraryCreate = document.querySelector("#closeLibraryCreate");
const cancelLibraryCreate = document.querySelector("#cancelLibraryCreate");
const confirmCreateLibrary = document.querySelector("#confirmCreateLibrary");
const newLibraryName = document.querySelector("#newLibraryName");
const newLibraryDescription = document.querySelector("#newLibraryDescription");
const searchDialog = document.querySelector("#searchDialog");
const closeSearch = document.querySelector("#closeSearch");
const skillsView = document.querySelector("#skillsView");
const libraryView = document.querySelector("#libraryView");
const libraryHeader = document.querySelector("#libraryHeader");
const libraryListView = document.querySelector("#libraryListView");
const libraryDetailView = document.querySelector("#libraryDetailView");
const libraryDetailTitle = document.querySelector("#libraryDetailTitle");
const libraryDetailDescription = document.querySelector("#libraryDetailDescription");
const backToLibraryList = document.querySelector("#backToLibraryList");
const libraryEmptyState = document.querySelector("#libraryEmptyState");
const libraryDeleteDialog = document.querySelector("#libraryDeleteDialog");
const libraryDeleteFileName = document.querySelector("#libraryDeleteFileName");
const cancelLibraryDelete = document.querySelector("#cancelLibraryDelete");
const confirmLibraryDelete = document.querySelector("#confirmLibraryDelete");
const projectsView = document.querySelector("#projectsView");
const projectDetailView = document.querySelector("#projectDetailView");
const projectDetailTitle = document.querySelector("#projectDetailTitle");
const projectPromptInput = document.querySelector("#projectPromptInput");
const projectChatRecords = document.querySelector("#projectChatRecords");
const projectChatEmpty = document.querySelector("#projectChatEmpty");
const projectEmptyName = document.querySelector("#projectEmptyName");
const newLibraryButton = document.querySelector("#newLibraryButton");
const accountMenu = document.querySelector("#accountMenu");
const logoutButton = document.querySelector("#logoutButton");
const upgradePlanButton = document.querySelector("#upgradePlanButton");
const upgradeDialog = document.querySelector("#upgradeDialog");
const closeUpgrade = document.querySelector("#closeUpgrade");
const accountManageButton = document.querySelector("#accountManageButton");
const billingButton = document.querySelector("#billingButton");
const accountDialog = document.querySelector("#accountDialog");
const closeAccountDialog = document.querySelector("#closeAccountDialog");
const openUpgradeFromAccount = document.querySelector("#openUpgradeFromAccount");
const manageSeatsButton = document.querySelector("#manageSeatsButton");
const backToSubscription = document.querySelector("#backToSubscription");
const planCheckoutDialog = document.querySelector("#planCheckoutDialog");
const closeCheckout = document.querySelector("#closeCheckout");
const backToPlans = document.querySelector("#backToPlans");
const businessCheckoutDialog = document.querySelector("#businessCheckoutDialog");
const openBusinessCheckout = document.querySelector("#openBusinessCheckout");
const closeBusinessCheckout = document.querySelector("#closeBusinessCheckout");
const businessBillingChoices = document.querySelectorAll("[data-business-billing]");
const businessPlanLine = document.querySelector("#businessPlanLine");
const businessPlanAmount = document.querySelector("#businessPlanAmount");
const businessDueAmount = document.querySelector("#businessDueAmount");
const businessCheckoutNote = document.querySelector("#businessCheckoutNote");
const checkoutTitle = document.querySelector("#checkoutTitle");
const checkoutSubtitle = document.querySelector("#checkoutSubtitle");
const checkoutIcon = document.querySelector("#checkoutIcon");
const checkoutPlanName = document.querySelector("#checkoutPlanName");
const checkoutPlanDesc = document.querySelector("#checkoutPlanDesc");
const checkoutPrice = document.querySelector("#checkoutPrice");
const checkoutBilling = document.querySelector("#checkoutBilling");
const checkoutSubtotal = document.querySelector("#checkoutSubtotal");
const checkoutDue = document.querySelector("#checkoutDue");
const checkoutRenewal = document.querySelector("#checkoutRenewal");
const addToolButton = document.querySelector("#addToolButton");
const skillsToolButton = document.querySelector("#skillsToolButton");
const modelToolButton = document.querySelector("#modelToolButton");
const projectAddToolButton = document.querySelector("#projectAddToolButton");
const projectSkillsToolButton = document.querySelector("#projectSkillsToolButton");
const projectModelToolButton = document.querySelector("#projectModelToolButton");
const addPopover = document.querySelector("#addPopover");
const skillsPopover = document.querySelector("#skillsPopover");
const modelPopover = document.querySelector("#modelPopover");
const projectMenu = document.querySelector("#projectMenu");
const projectPinText = document.querySelector("#projectPinText");
const libraryFileMenu = document.querySelector("#libraryFileMenu");
const createProjectDialog = document.querySelector("#createProjectDialog");
const projectSettingsDialog = document.querySelector("#projectSettingsDialog");
const projectDeleteDialog = document.querySelector("#projectDeleteDialog");
const projectShareDialog = document.querySelector("#projectShareDialog");
const newProjectButton = document.querySelector("#newProjectButton");
const sidebarNewProject = document.querySelector("#sidebarNewProject");
const confirmCreateProject = document.querySelector("#confirmCreateProject");
const newProjectName = document.querySelector("#newProjectName");
const projectSettingsName = document.querySelector("#projectSettingsName");
const confirmProjectDelete = document.querySelector("#confirmProjectDelete");
const settingsDeleteProject = document.querySelector("#settingsDeleteProject");
const shareProjectName = document.querySelector("#shareProjectName");
const projectSharedEmpty = document.querySelector("#projectSharedEmpty");
const inviteEmailInput = document.querySelector("#inviteEmailInput");
const inviteChip = document.querySelector("#inviteChip");
const clearInvite = document.querySelector("#clearInvite");
const permissionSelect = document.querySelector("#permissionSelect");
const permissionMenu = document.querySelector("#permissionMenu");
const cancelInvite = document.querySelector("#cancelInvite");
const inviteButton = document.querySelector("#inviteButton");

let activeProjectRow = null;
let activeLibraryFileRow = null;
let pendingLibraryDeleteRow = null;

let activeMenuButton = null;
let selectedChatId = "ads";
let isLoggedIn = false;
let currentUser = {
  name: "memolabsio",
  email: "memolabsio@gmail.com",
};

const experts = {
  store: {
    title: "店铺运营顾问",
    category: "店铺运营",
    iconClass: "expert-icon-blue",
    icon: "M4 20V9l8-5 8 5v11M8 20v-7h8v7",
    intro: "精通亚马逊 A9 算法和店铺日常运营，从账号健康到 BSR 排名提升，提供全链路运营策略支持。",
    sources: ["运营知识库", "合规手册"],
    strengths: ["账号健康", "BSR 优化", "FBA 库存管理", "促销策略"],
    prompts: [
      "我的店铺 IPI 分数持续下降，怎么改善？",
      "如何制定旺季备货计划以避免断货？",
      "店铺被警告侵权，第一步应该怎么处理？",
    ],
    starter: "我们的店铺 IPI 分数持续下降，请从账号健康、库存周转和促销节奏帮我制定改善方案。",
  },
  product: {
    title: "选品分析专家",
    category: "选品开发",
    iconClass: "expert-icon-green",
    icon: "M5 20V9h4v11M10 20V4h4v16M15 20v-8h4v8",
    intro: "基于市场数据和竞品分析，识别蓝海选品机会，评估竞争格局与利润空间，辅助决策选品方向。",
    sources: ["选品报告库", "市场数据库"],
    strengths: ["蓝海选品", "竞品分析", "利润测算", "市场机会"],
    prompts: [
      "这个类目是否还有蓝海切入机会？",
      "如何判断竞品是否值得跟进？",
      "新品定价时应该如何测算利润空间？",
    ],
    starter: "我想开发一个新的亚马逊产品，请从市场容量、竞品格局和利润空间帮我评估选品机会。",
  },
  ads: {
    title: "广告投放专家",
    category: "广告投放",
    iconClass: "expert-icon-yellow",
    icon: "M4 13h4l9-6v10l-9-4H4Zm4 0v5",
    intro: "深度掌握 SP / SB / SD 广告逻辑，从关键词挖掘到竞价策略，帮助降低 ACOS 并提升广告 ROI。",
    sources: ["广告策略库", "关键词数据库"],
    strengths: ["SP 广告", "SB 广告", "ACOS 优化", "关键词拓展"],
    prompts: [
      "ACOS 突然升高，应该先检查哪些指标？",
      "如何把广告预算分配给精准词和拓词广告？",
      "新品广告前两周应该怎么设置投放节奏？",
    ],
    starter: "我的广告 ACOS 最近异常升高，请从关键词、竞价、预算和转化率角度帮我诊断。",
  },
  listing: {
    title: "Listing 优化师",
    category: "Listing 优化",
    iconClass: "expert-icon-stone",
    icon: "M5 19h14M7 17 17.5 6.5l-3-3L4 14v3h3Z",
    intro: "精通亚马逊搜索算法与用户心理，优化标题、五点、A+ 内容和主图，提升自然流量和转化率。",
    sources: ["Listing 模板库", "SEO 关键词库"],
    strengths: ["标题优化", "A+ 内容", "主图策略", "五点描述"],
    prompts: [
      "如何重构标题与五点描述提升转化？",
      "主图点击率偏低，应该怎么优化？",
      "A+ 页面应该突出哪些卖点？",
    ],
    starter: "请帮我优化当前 Listing，从标题、五点、主图和 A+ 内容给出提升转化的改进建议。",
  },
  compliance: {
    title: "合规法务顾问",
    category: "合规法务",
    iconClass: "expert-icon-red",
    icon: "M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z",
    intro: "熟悉亚马逊平台政策、各地区认证要求和知识产权规则，帮助规避合规风险，处理申诉和投诉。",
    sources: ["合规手册", "专利检索库"],
    strengths: ["侵权规避", "平台申诉", "产品认证", "风险排查"],
    prompts: [
      "收到侵权投诉后第一步应该怎么处理？",
      "这个产品上架前需要准备哪些认证？",
      "如何判断竞品图片是否存在侵权风险？",
    ],
    starter: "我遇到亚马逊合规风险，请帮我判断可能原因，并给出申诉或整改的第一步方案。",
  },
  data: {
    title: "数据分析师",
    category: "数据分析",
    iconClass: "expert-icon-mint",
    icon: "M4 18h16M6 15l4-4 3 3 5-7",
    intro: "擅长解读亚马逊 Business Report、广告报告和库存数据，找出业务瓶颈并给出数据驱动的改进建议。",
    sources: ["运营知识库", "广告策略库"],
    strengths: ["Business Report", "转化率分析", "库存周转", "经营复盘"],
    prompts: [
      "如何从 Business Report 判断转化率问题？",
      "库存周转变慢时应该优先看哪些数据？",
      "如何做一份月度运营复盘？",
    ],
    starter: "请基于 Business Report、广告报告和库存数据，帮我做一次业务瓶颈分析。",
  },
};

function openLoginModal() {
  loginModal.classList.remove("hidden");
  loginModal.setAttribute("aria-hidden", "false");
  setTimeout(() => document.querySelector("#emailInput").focus(), 40);
}

function closeLoginModal() {
  loginModal.classList.add("hidden");
  loginModal.setAttribute("aria-hidden", "true");
}

function setLoggedIn(label) {
  isLoggedIn = true;
  currentUser.email = label.includes("@") ? label : "memolabsio@gmail.com";
  currentUser.name = label.includes("@") ? label.split("@")[0] : "cathy";
  profileName.innerHTML = `<strong>${currentUser.name}</strong><span>Free plan</span>`;
  profileLogin.textContent = currentUser.name.slice(0, 1).toUpperCase();
  profileLogin.classList.remove("logged-out");
  document.querySelector(".account-head strong").textContent = currentUser.email;
  document.querySelector("#settingsName").value = currentUser.name;
  document.querySelector("#settingsEmail").value = currentUser.email;
  document.querySelector("#settingsAvatar").textContent = currentUser.name.slice(0, 1).toUpperCase();
  closeLoginModal();
}

function closeAccountMenu() {
  accountMenu.classList.add("hidden");
  accountMenu.setAttribute("aria-hidden", "true");
}

function closeComposerPopovers() {
  [addPopover, skillsPopover, modelPopover].forEach((popover) => {
    popover.classList.add("hidden");
    popover.setAttribute("aria-hidden", "true");
  });
}

function positionComposerPopover(button, popover) {
  const rect = button.getBoundingClientRect();
  const width = popover.offsetWidth;
  const height = popover.offsetHeight;
  const viewportPadding = 12;
  let left = rect.left;

  if (popover === modelPopover) {
    left = rect.right - width;
  }

  left = Math.max(viewportPadding, Math.min(left, window.innerWidth - width - viewportPadding));
  const isNewChat = !chatStage.classList.contains("has-messages");
  const isProjectComposer = Boolean(button.closest(".project-chat-composer"));
  const top = isNewChat
    || isProjectComposer
    ? Math.min(window.innerHeight - height - viewportPadding, rect.bottom + 10)
    : Math.max(viewportPadding, rect.top - height - 10);
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.style.right = "auto";
}

function toggleComposerPopover(button, popover) {
  const willOpen = popover.classList.contains("hidden");
  closeComposerPopovers();
  if (willOpen) {
    popover.classList.remove("hidden");
    popover.setAttribute("aria-hidden", "false");
    positionComposerPopover(button, popover);
  }
}

function setLoggedOut() {
  isLoggedIn = false;
  profileLogin.textContent = "ww";
  profileLogin.classList.add("logged-out");
  profileName.innerHTML = "<strong>登录 WinWise</strong><span>Free plan</span>";
  closeAccountMenu();
}

function openAccountDialog(tab = "profile") {
  closeAccountMenu();
  accountDialog.classList.remove("hidden");
  accountDialog.setAttribute("aria-hidden", "false");
  setAccountTab(tab);
}

function closeAccountPanel() {
  accountDialog.classList.add("hidden");
  accountDialog.setAttribute("aria-hidden", "true");
}

function setAccountTab(tab) {
  document.querySelectorAll("[data-account-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.accountTab === tab);
  });
  document.querySelectorAll("[data-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== tab);
  });
}

function closeContextMenu() {
  document.querySelectorAll(".history-item.menu-open").forEach((item) => item.classList.remove("menu-open"));
  contextMenu.classList.remove("show");
  contextMenu.setAttribute("aria-hidden", "true");
}

function closeProjectMenu() {
  projectMenu.classList.add("hidden");
  projectMenu.setAttribute("aria-hidden", "true");
}

function closeLibraryFileMenu() {
  document.querySelectorAll(".library-row.menu-open").forEach((row) => row.classList.remove("menu-open"));
  libraryFileMenu.classList.add("hidden");
  libraryFileMenu.setAttribute("aria-hidden", "true");
  activeLibraryFileRow = null;
}

function getMenuButton() {
  return activeMenuButton ? activeMenuButton.closest(".history-item") : null;
}

function isPinned(button) {
  return Boolean(button && button.closest("section") === pinnedSection);
}

function refreshPinnedVisibility() {
  pinnedSection.classList.toggle("hidden", !pinnedSection.querySelector(".history-item"));
}

function limitHistoryGroups() {
  document.querySelectorAll(".chat-history section").forEach((section) => {
    section.querySelectorAll(".history-item").forEach((item, index) => {
      item.classList.toggle("group-hidden", index >= 2);
    });
  });
}

function openDialog(dialog) {
  dialog.classList.remove("hidden");
  dialog.setAttribute("aria-hidden", "false");
}

function showChatSurface() {
  openSkills.classList.remove("active");
  openLibraryCreate.classList.remove("active");
  openProjects.classList.remove("active");
  skillsView.classList.add("hidden");
  libraryView.classList.add("hidden");
  projectsView.classList.add("hidden");
  projectDetailView.classList.add("hidden");
  examplesView.classList.add("hidden");
  composer.classList.remove("hidden");
  messages.classList.remove("hidden");
  activeExpertPill.classList.add("hidden");
  composer.classList.remove("expert-active");
  promptInput.value = "";
  promptInput.style.height = "auto";
  promptInput.placeholder = "让 WinWise 分析一次亚马逊运营方案";
}

function showSkillsSurface() {
  closeContextMenu();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  chatStage.classList.add("has-messages");
  openSkills.classList.add("active");
  openLibraryCreate.classList.remove("active");
  openProjects.classList.remove("active");
  messages.classList.add("hidden");
  composer.classList.add("hidden");
  skillsView.classList.remove("hidden");
  libraryView.classList.add("hidden");
  projectsView.classList.add("hidden");
  projectDetailView.classList.add("hidden");
  examplesView.classList.add("hidden");
  conversationTitle.textContent = "Experts";
  conversationMode.lastChild.textContent = " 应用能力";
}

function showLibrarySurface() {
  closeContextMenu();
  closeProjectMenu();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  chatStage.classList.add("has-messages");
  openLibraryCreate.classList.add("active");
  openSkills.classList.remove("active");
  openProjects.classList.remove("active");
  messages.classList.add("hidden");
  composer.classList.add("hidden");
  skillsView.classList.add("hidden");
  libraryView.classList.remove("hidden");
  projectsView.classList.add("hidden");
  projectDetailView.classList.add("hidden");
  examplesView.classList.add("hidden");
  conversationTitle.textContent = "Library";
  conversationMode.lastChild.textContent = " 知识库";
  libraryHeader.classList.remove("hidden");
  libraryListView.classList.add("hidden");
  libraryDetailView.classList.remove("hidden");
  setLibraryTab("all");
}

function showProjectsSurface() {
  closeContextMenu();
  closeProjectMenu();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  chatStage.classList.add("has-messages");
  openProjects.classList.add("active");
  openSkills.classList.remove("active");
  openLibraryCreate.classList.remove("active");
  messages.classList.add("hidden");
  composer.classList.add("hidden");
  skillsView.classList.add("hidden");
  libraryView.classList.add("hidden");
  projectsView.classList.remove("hidden");
  projectDetailView.classList.add("hidden");
  examplesView.classList.add("hidden");
}

function showProjectDetailSurface(projectName) {
  const normalizedName = projectName.trim();
  closeContextMenu();
  closeProjectMenu();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  chatStage.classList.add("has-messages");
  openProjects.classList.add("active");
  openSkills.classList.remove("active");
  openLibraryCreate.classList.remove("active");
  messages.classList.add("hidden");
  composer.classList.add("hidden");
  skillsView.classList.add("hidden");
  libraryView.classList.add("hidden");
  projectsView.classList.add("hidden");
  projectDetailView.classList.remove("hidden");
  examplesView.classList.add("hidden");
  projectDetailTitle.textContent = normalizedName;
  projectPromptInput.placeholder = `${normalizedName}中的新聊天`;
  projectEmptyName.textContent = normalizedName;
  const hasChats = normalizedName.toLowerCase() === "cathy";
  projectChatRecords.classList.toggle("hidden", !hasChats);
  projectChatEmpty.classList.toggle("hidden", hasChats);
  conversationTitle.textContent = normalizedName;
  conversationMode.lastChild.textContent = " 项目";
}

function showExamplesSurface() {
  chatStage.classList.add("has-messages");
  openSkills.classList.remove("active");
  openLibraryCreate.classList.remove("active");
  openProjects.classList.remove("active");
  messages.classList.add("hidden");
  composer.classList.add("hidden");
  skillsView.classList.add("hidden");
  libraryView.classList.add("hidden");
  projectsView.classList.add("hidden");
  projectDetailView.classList.add("hidden");
  examplesView.classList.remove("hidden");
}

function closeDialog(dialog) {
  dialog.classList.add("hidden");
  dialog.setAttribute("aria-hidden", "true");
}

function clearExpertComposerState() {
  activeExpertPill.classList.add("hidden");
  composer.classList.remove("expert-active");
  promptInput.placeholder = "让 WinWise 分析一次亚马逊运营方案";
}

function setNewChatMode(mode) {
  document.querySelectorAll(".mode-btn").forEach((item) => {
    const selected = item.dataset.mode === mode;
    item.classList.toggle("selected", selected);
    item.setAttribute("aria-selected", String(selected));
  });
  const label = mode === "quick" ? "快速" : "专家";
  welcomeTitle.textContent = "WinWise 让运营更简单";
  welcomeSubtitle.textContent = `使用${label}模式开始对话，帮你搞定广告、选品与增长`;
}

function renderConversation(chatId) {
  const base = conversations[chatId] || fallbackConversation;
  selectedChatId = chatId;
  showChatSurface();
  chatStage.classList.add("has-messages");
  activeExpertPill.classList.add("hidden");
  promptInput.placeholder = "让 WinWise 分析一次亚马逊运营方案";
  clearExpertComposerState();
  promptInput.value = "";
  promptInput.style.height = "auto";
  conversationTitle.textContent = base.title;
  conversationMode.lastChild.textContent = ` ${base.mode}`;
  messages.innerHTML = `
    <article class="message user">${base.question}</article>
    ${createAssistantMessage(base.answer)}
  `;
  messages.scrollTop = 0;
}

function renderFeaturedExample(exampleId) {
  const example = featuredExamples[exampleId];
  if (!example) return;
  showChatSurface();
  chatStage.classList.add("has-messages");
  activeExpertPill.classList.add("hidden");
  promptInput.placeholder = "让 WinWise 分析一次亚马逊运营方案";
  clearExpertComposerState();
  promptInput.value = "";
  promptInput.style.height = "auto";
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  conversationTitle.textContent = example.title;
  messages.innerHTML = `
    <article class="message user">${example.question}</article>
    ${createAssistantMessage(example.answer)}
  `;
  messages.scrollTop = 0;
}

function createAssistantMessage(answer) {
  return `
    <article class="message assistant">
      ${sourceBadge}
      <div class="assistant-content">${answer}</div>
      ${sourcePill}
      <div class="answer-actions" aria-label="回答操作">
        <button type="button" data-answer-action="copy" title="复制">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8h11v11H8zM5 16H4a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h10a1 1 0 0 1 1 1v1" /></svg>
        </button>
        <button type="button" data-answer-action="regen" title="重新生成">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v6h-6" /></svg>
        </button>
        <button type="button" data-answer-action="share" title="分享">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a3 3 0 1 0-2.8-4M6 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8.6 15.4l6.8-4.8M8.7 18.5l6.6 2.9" /></svg>
        </button>
      </div>
    </article>
  `;
}

function setActiveChat(button) {
  closeContextMenu();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderConversation(button.dataset.chat);
}

function ensureItemMenu(button) {
  if (button.querySelector(".item-menu")) return;
  const menu = document.createElement("span");
  menu.className = "item-menu";
  menu.dataset.menu = button.dataset.chat;
  menu.setAttribute("aria-label", "更多");
  menu.textContent = "...";
  button.appendChild(menu);
  bindMenuTrigger(menu);
}

function togglePin(button) {
  if (!button) return;
  ensureItemMenu(button);
  if (isPinned(button)) {
    todaySection.appendChild(button);
  } else {
    pinnedSection.appendChild(button);
  }
  refreshPinnedVisibility();
  limitHistoryGroups();
  closeContextMenu();
}

function deleteChat(button) {
  if (!button) return;
  const wasActive = button.classList.contains("active");
  button.remove();
  refreshPinnedVisibility();
  limitHistoryGroups();
  closeDialog(deleteDialog);
  if (wasActive) document.querySelector("#newChat").click();
}

function renameChat(button) {
  if (!button) return;
  const title = button.querySelector("span:first-child");
  title.textContent = renameInput.value.trim() || title.textContent;
  if (conversations[button.dataset.chat]) conversations[button.dataset.chat].title = title.textContent;
  if (button.classList.contains("active")) conversationTitle.textContent = title.textContent;
  closeDialog(renameDialog);
}

function openShare(button) {
  const chatId = button?.dataset.chat || selectedChatId || "new";
  shareUrl.textContent = `https://winwise.local/share/${chatId}`;
  shareResult.classList.add("hidden");
  createShare.classList.remove("hidden");
  openDialog(shareDialog);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }
}

function addMessage(text, role) {
  if (role === "assistant") {
    messages.insertAdjacentHTML("beforeend", createAssistantMessage(`<p>${text}</p>`));
    chatStage.classList.add("has-messages");
    messages.scrollTop = messages.scrollHeight;
    return;
  }

  const bubble = document.createElement("article");
  bubble.className = `message ${role}`;
  bubble.textContent = text;
  chatStage.classList.add("has-messages");
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function bindMenuTrigger(trigger) {
  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    closeContextMenu();
    activeMenuButton = trigger;
    const item = getMenuButton();
    item?.classList.add("menu-open");
    pinActionText.textContent = isPinned(item) ? "取消置顶" : "置顶";
    const rect = trigger.getBoundingClientRect();
    contextMenu.style.left = `${rect.right - 42}px`;
    contextMenu.style.top = `${rect.bottom + 8}px`;
    contextMenu.classList.add("show");
    contextMenu.setAttribute("aria-hidden", "false");
  });
}

document.querySelector("#newChat").addEventListener("click", () => {
  closeContextMenu();
  showChatSurface();
  document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
  messages.replaceChildren();
  chatStage.classList.remove("has-messages");
  setNewChatMode("quick");
  activeExpertPill.classList.add("hidden");
  promptInput.value = "";
  promptInput.placeholder = "让 WinWise 分析一次亚马逊运营方案";
  promptInput.style.height = "auto";
  promptInput.focus();
});

exploreMoreExamples.addEventListener("click", showExamplesSurface);
backToNewChat.addEventListener("click", () => document.querySelector("#newChat").click());

openSearch.addEventListener("click", () => {
  searchDialog.classList.remove("hidden");
  searchDialog.setAttribute("aria-hidden", "false");
  setTimeout(() => searchDialog.querySelector("input").focus(), 30);
});

closeSearch.addEventListener("click", () => {
  searchDialog.classList.add("hidden");
  searchDialog.setAttribute("aria-hidden", "true");
});

searchDialog.addEventListener("click", (event) => {
  if (event.target === searchDialog) closeSearch.click();
});

function renderExpertChips(container, items) {
  if (!container) return;
  container.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}

function setExpertPrompt(text, expertId = null) {
  closeDialog(expertDialog);
  document.querySelector("#newChat").click();
  if (expertId && experts[expertId]) {
    activeExpertName.textContent = experts[expertId].title;
    activeExpertPill.classList.remove("hidden");
    promptInput.placeholder = `向${experts[expertId].title}提问`;
  }
  promptInput.value = text;
  promptInput.style.height = "auto";
  promptInput.style.height = `${promptInput.scrollHeight}px`;
  promptInput.focus();
}

function summonExpert(expertId) {
  const expert = experts[expertId];
  if (!expert) return;
  setExpertPrompt(expert.starter, expertId);
}

function openExpertDialog(expertId) {
  const expert = experts[expertId];
  if (!expert) return;
  expertDialogIcon.className = `expert-icon ${expert.iconClass}`;
  expertDialogIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${expert.icon}" /></svg>`;
  expertDialogTitle.textContent = expert.title;
  expertDialogCategory.textContent = expert.category;
  expertDialogIntro.textContent = expert.intro;
  renderExpertChips(expertDialogSources, expert.sources);
  renderExpertChips(expertDialogStrengths, expert.strengths);
  expertDialogPrompts.innerHTML = expert.prompts
    .map((prompt) => `<button type="button" data-expert-prompt="${prompt}">“${prompt}”<span>›</span></button>`)
    .join("");
  callExpertButton.textContent = `召唤${expert.title}`;
  callExpertButton.dataset.expertTitle = expert.title;
  openDialog(expertDialog);
}

openExpertDialog = function (expertId) {
  const expert = experts[expertId];
  if (!expert) return;
  expertDialogIcon.className = `expert-icon ${expert.iconClass}`;
  expertDialogIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${expert.icon}" /></svg>`;
  expertDialogTitle.textContent = expert.title;
  expertDialogCategory.textContent = expert.category;
  expertDialogIntro.textContent = expert.intro;
  renderExpertChips(expertDialogSources, expert.sources);
  renderExpertChips(expertDialogStrengths, expert.strengths);
  expertDialogPrompts.innerHTML = expert.prompts
    .map((prompt) => `<button type="button" data-expert-prompt="${prompt}">“${prompt}”<span>›</span></button>`)
    .join("");
  callExpertButton.textContent = `召唤${expert.title}`;
  callExpertButton.dataset.expertTitle = expert.title;
  callExpertButton.dataset.expertId = expertId;
  openDialog(expertDialog);
};

openSkills.addEventListener("click", () => {
  showSkillsSurface();
  conversationMode.lastChild.textContent = " 专家中心";
});
openProjects.addEventListener("click", showProjectsSurface);
openLibraryCreate.addEventListener("click", showLibrarySurface);

function openUploadSkillDialog() {
  if (!uploadSkillDialog) return;
  uploadSkillDialog.classList.remove("hidden");
  uploadSkillDialog.setAttribute("aria-hidden", "false");
}

function closeUploadSkillDialog() {
  if (!uploadSkillDialog) return;
  uploadSkillDialog.classList.add("hidden");
  uploadSkillDialog.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-expert]").forEach((card) => {
  card.addEventListener("click", () => openExpertDialog(card.dataset.expert));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openExpertDialog(card.dataset.expert);
    }
  });
});

document.querySelectorAll("[data-expert-call]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    summonExpert(button.dataset.expertCall);
  });
});

document.querySelectorAll(".expert-filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".expert-filters button").forEach((filter) => filter.classList.toggle("active", filter === button));
    const category = button.textContent.trim();
    document.querySelectorAll("[data-expert]").forEach((card) => {
      const expert = experts[card.dataset.expert];
      card.classList.toggle("hidden", category !== "全部" && expert.category !== category);
    });
  });
});

document.querySelectorAll("[data-expert-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.expertFilter;
    document.querySelectorAll("[data-expert]").forEach((card) => {
      const expert = experts[card.dataset.expert];
      card.classList.toggle("hidden", category !== "all" && expert.category !== category);
    });
  });
});

closeExpertDialog.addEventListener("click", () => closeDialog(expertDialog));
expertDialog.addEventListener("click", (event) => {
  if (event.target === expertDialog) closeDialog(expertDialog);
});
expertDialogPrompts.addEventListener("click", (event) => {
  const promptButton = event.target.closest("[data-expert-prompt]");
  if (promptButton) setExpertPrompt(promptButton.dataset.expertPrompt);
});
callExpertButton.addEventListener("click", () => {
  setExpertPrompt(`请以${callExpertButton.dataset.expertTitle}身份，基于资料库帮助我分析：`);
});

uploadSkillButton?.addEventListener("click", openUploadSkillDialog);
closeUploadSkill?.addEventListener("click", closeUploadSkillDialog);
uploadSkillDialog?.addEventListener("click", (event) => {
  if (event.target === uploadSkillDialog) closeUploadSkillDialog();
});

openExpertDialog = function (expertId) {
  const expert = experts[expertId];
  if (!expert) return;
  expertDialogIcon.className = `expert-icon ${expert.iconClass}`;
  expertDialogIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${expert.icon}" /></svg>`;
  expertDialogTitle.textContent = expert.title;
  expertDialogCategory.textContent = expert.category;
  expertDialogIntro.textContent = expert.intro;
  renderExpertChips(expertDialogStrengths, expert.strengths);
  expertDialogPrompts.innerHTML = expert.prompts
    .map((prompt) => `<button type="button" data-expert-prompt="${prompt}">“${prompt}”<span>›</span></button>`)
    .join("");
  callExpertButton.textContent = `召唤${expert.title}`;
  callExpertButton.dataset.expertTitle = expert.title;
  callExpertButton.dataset.expertId = expertId;
  openDialog(expertDialog);
};

document.querySelectorAll("[data-expert-popover-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-expert-popover-filter]").forEach((tab) => {
      tab.classList.toggle("active", tab === button);
    });
    const category = button.dataset.expertPopoverFilter;
    document.querySelectorAll("[data-expert-popover-category]").forEach((item) => {
      item.classList.toggle("hidden", category !== "all" && item.dataset.expertPopoverCategory !== category);
    });
  });
});

document.querySelectorAll("[data-expert-pick]").forEach((button) => {
  button.addEventListener("click", () => {
    closeComposerPopovers();
    summonExpert(button.dataset.expertPick);
  });
});

setExpertPrompt = function (text, expertId = null) {
  closeDialog(expertDialog);
  document.querySelector("#newChat").click();
  if (expertId && experts[expertId]) {
    activeExpertName.textContent = experts[expertId].title;
    activeExpertPill.classList.remove("hidden");
    promptInput.placeholder = `向${experts[expertId].title}提问`;
  }
  promptInput.value = text;
  promptInput.style.height = "auto";
  promptInput.style.height = `${promptInput.scrollHeight}px`;
  promptInput.focus();
};

callExpertButton.addEventListener("click", () => {
  summonExpert(callExpertButton.dataset.expertId);
});

openExpertDialog = function (expertId) {
  const expert = experts[expertId];
  if (!expert) return;
  expertDialogIcon.className = `expert-icon ${expert.iconClass}`;
  expertDialogIcon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${expert.icon}" /></svg>`;
  expertDialogTitle.textContent = expert.title;
  expertDialogCategory.textContent = expert.category;
  expertDialogIntro.textContent = expert.intro;
  renderExpertChips(expertDialogStrengths, expert.strengths);
  expertDialogPrompts.innerHTML = expert.prompts
    .map((prompt) => `<button type="button" data-expert-prompt="${prompt}">&ldquo;${prompt}&rdquo;<span>&rsaquo;</span></button>`)
    .join("");
  callExpertButton.textContent = `\u53ec\u5524${expert.title}`;
  callExpertButton.dataset.expertTitle = expert.title;
  callExpertButton.dataset.expertId = expertId;
  openDialog(expertDialog);
};

setExpertPrompt = function (text, expertId = null) {
  closeDialog(expertDialog);
  document.querySelector("#newChat").click();
  if (expertId && experts[expertId]) {
    activeExpertName.textContent = experts[expertId].title;
    activeExpertPill.classList.remove("hidden");
    composer.classList.add("expert-active");
    promptInput.placeholder = `\u5411${experts[expertId].title}\u63d0\u95ee`;
  }
  promptInput.value = text;
  promptInput.style.height = "auto";
  promptInput.style.height = `${promptInput.scrollHeight}px`;
  promptInput.focus();
};

function openLibraryDialog() {
  createLibraryDialog.classList.remove("hidden");
  createLibraryDialog.setAttribute("aria-hidden", "false");
  newLibraryName.value = "";
  newLibraryDescription.value = "";
  setTimeout(() => newLibraryName.focus(), 20);
}

function closeLibraryDialog() {
  createLibraryDialog.classList.add("hidden");
  createLibraryDialog.setAttribute("aria-hidden", "true");
}

newLibraryButton.addEventListener("click", () => {});
closeLibraryCreate.addEventListener("click", closeLibraryDialog);
cancelLibraryCreate.addEventListener("click", closeLibraryDialog);
createLibraryDialog.addEventListener("click", (event) => {
  if (event.target === createLibraryDialog) closeLibraryDialog();
});

confirmCreateLibrary.addEventListener("click", () => {
  const libraryName = newLibraryName.value.trim() || "未命名知识库";
  const libraryDescription = newLibraryDescription.value.trim() || "暂无知识库描述";
  const row = document.createElement("article");
  const nameButton = document.createElement("button");
  const createdTime = document.createElement("time");
  row.className = "library-summary-row";
  row.dataset.libraryName = libraryName;
  row.dataset.libraryDescription = libraryDescription;
  nameButton.type = "button";
  nameButton.textContent = libraryName;
  createdTime.textContent = "今天";
  row.append(nameButton, createdTime);
  document.querySelector(".library-summary-table").appendChild(row);
  bindLibrarySummaryRow(row);
  closeLibraryDialog();
});

function setLibraryTab(tabType) {
  document.querySelectorAll("[data-library-tab]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.libraryTab === tabType);
  });
  const rows = Array.from(document.querySelectorAll("[data-library-kind]"));
  rows.forEach((row) => {
    row.classList.toggle("hidden", tabType !== "all" && row.dataset.libraryKind !== tabType);
  });
  const visibleRows = rows.filter((row) => !row.classList.contains("hidden"));
  const table = document.querySelector("#libraryDetailView .library-table");
  libraryEmptyState.classList.toggle("hidden", visibleRows.length > 0);
  table.classList.toggle("hidden", visibleRows.length === 0);
}

document.querySelectorAll("[data-library-tab]").forEach((button) => {
  button.addEventListener("click", () => setLibraryTab(button.dataset.libraryTab));
});

function openLibraryDetail(row) {
  const button = row.querySelector("button");
  libraryDetailTitle.textContent = row.dataset.libraryName || button.textContent.trim();
  libraryDetailDescription.textContent = row.dataset.libraryDescription || "暂无知识库描述";
  libraryHeader.classList.add("hidden");
  libraryListView.classList.add("hidden");
  libraryDetailView.classList.remove("hidden");
  document.querySelectorAll("[data-library-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.libraryTab === "all"));
  document.querySelectorAll("[data-library-kind]").forEach((item) => item.classList.remove("hidden"));
}

function bindLibrarySummaryRow(row) {
  row.querySelector("button").addEventListener("click", () => openLibraryDetail(row));
}

document.querySelectorAll(".library-summary-row").forEach(bindLibrarySummaryRow);

backToLibraryList?.addEventListener("click", () => {
  libraryDetailView.classList.add("hidden");
  libraryHeader.classList.remove("hidden");
  libraryListView.classList.remove("hidden");
});

document.querySelector(".library-table").addEventListener("click", (event) => {
  const moreButton = event.target.closest(".library-file-more");
  if (!moreButton) return;
  event.stopPropagation();
  closeLibraryFileMenu();
  activeLibraryFileRow = moreButton.closest(".library-row");
  activeLibraryFileRow.classList.add("menu-open");
  const rect = moreButton.getBoundingClientRect();
  libraryFileMenu.style.left = `${rect.right - 184}px`;
  libraryFileMenu.style.top = `${rect.bottom + 6}px`;
  libraryFileMenu.classList.remove("hidden");
  libraryFileMenu.setAttribute("aria-hidden", "false");
});

libraryFileMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  const actionButton = event.target.closest("[data-library-file-action]");
  if (!actionButton || !activeLibraryFileRow) return;
  const action = actionButton.dataset.libraryFileAction;
  const fileName = activeLibraryFileRow.querySelector("span")?.textContent.trim() || "WinWise 文件";

  if (action === "download") {
    const blob = new Blob([`${fileName}\nWinWise 文件下载示例。`], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  if (action === "delete") {
    pendingLibraryDeleteRow = activeLibraryFileRow;
    libraryDeleteFileName.textContent = fileName;
    libraryDeleteDialog.classList.remove("hidden");
    libraryDeleteDialog.setAttribute("aria-hidden", "false");
  }

  closeLibraryFileMenu();
});

function closeLibraryDeleteDialog() {
  libraryDeleteDialog.classList.add("hidden");
  libraryDeleteDialog.setAttribute("aria-hidden", "true");
}

cancelLibraryDelete.addEventListener("click", () => {
  pendingLibraryDeleteRow = null;
  closeLibraryDeleteDialog();
});

confirmLibraryDelete.addEventListener("click", () => {
  pendingLibraryDeleteRow?.remove();
  pendingLibraryDeleteRow = null;
  closeLibraryDeleteDialog();
  const activeTab = document.querySelector("[data-library-tab].active")?.dataset.libraryTab || "all";
  setLibraryTab(activeTab);
});

libraryDeleteDialog.addEventListener("click", (event) => {
  if (event.target === libraryDeleteDialog) {
    pendingLibraryDeleteRow = null;
    closeLibraryDeleteDialog();
  }
});

document.querySelectorAll("[data-project-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-project-tab]").forEach((tab) => tab.classList.toggle("active", tab === button));
    const isShared = button.dataset.projectTab === "shared";
    document.querySelector(".project-table").classList.toggle("hidden", isShared);
    projectSharedEmpty.classList.toggle("hidden", !isShared);
  });
});

document.querySelector("[data-project-toggle='memo']").addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("open");
  document.querySelector("[data-project-list='memo']").classList.toggle("collapsed");
});

[newProjectButton, sidebarNewProject].forEach((button) => {
  button.addEventListener("click", () => {
    createProjectDialog.classList.remove("hidden");
    createProjectDialog.setAttribute("aria-hidden", "false");
    setTimeout(() => newProjectName.focus(), 20);
  });
});

document.querySelector(".project-table").addEventListener("click", (event) => {
  const projectNameButton = event.target.closest(".project-name");
  if (projectNameButton) {
    const row = projectNameButton.closest(".project-row");
    showProjectDetailSurface(row.dataset.project || projectNameButton.textContent.trim());
    return;
  }

  const button = event.target.closest(".project-more");
  if (!button) return;
  event.stopPropagation();
  activeProjectRow = button.closest(".project-row");
  const name = activeProjectRow.querySelector(".project-name").textContent.trim();
  projectPinText.textContent = activeProjectRow.classList.contains("pinned") ? "取消置顶项目" : "置顶项目";
  projectSettingsName.value = name;
  shareProjectName.textContent = name;
  const rect = button.getBoundingClientRect();
  projectMenu.style.left = `${rect.left - 160}px`;
  projectMenu.style.top = `${rect.bottom + 6}px`;
  projectMenu.classList.remove("hidden");
  projectMenu.setAttribute("aria-hidden", "false");
});

document.querySelectorAll("[data-project-chat]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".history-item").forEach((item) => item.classList.remove("active"));
    renderConversation(button.dataset.projectChat);
  });
});

projectMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  const actionButton = event.target.closest("[data-project-action]");
  if (!actionButton || !activeProjectRow) return;
  const action = actionButton.dataset.projectAction;
  closeProjectMenu();
  if (action === "pin") activeProjectRow.classList.toggle("pinned");
  if (action === "settings") projectSettingsDialog.classList.remove("hidden");
  if (action === "share") projectShareDialog.classList.remove("hidden");
  if (action === "delete") projectDeleteDialog.classList.remove("hidden");
});

function setInviteMode(enabled) {
  inviteEmailInput.classList.toggle("hidden", enabled);
  inviteChip.classList.toggle("hidden", !enabled);
  permissionSelect.classList.toggle("hidden", !enabled);
  cancelInvite.classList.toggle("hidden", !enabled);
  inviteButton.classList.toggle("hidden", !enabled);
  document.querySelector(".copy-project-link").classList.toggle("hidden", enabled);
}

inviteEmailInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && inviteEmailInput.value.trim()) {
    event.preventDefault();
    inviteChip.firstChild.textContent = `${inviteEmailInput.value.trim()} `;
    setInviteMode(true);
  }
});

inviteEmailInput.addEventListener("blur", () => {
  if (inviteEmailInput.value.trim()) {
    inviteChip.firstChild.textContent = `${inviteEmailInput.value.trim()} `;
    setInviteMode(true);
  }
});

clearInvite.addEventListener("click", () => {
  inviteEmailInput.value = "";
  setInviteMode(false);
  permissionMenu.classList.add("hidden");
});

cancelInvite.addEventListener("click", () => clearInvite.click());

permissionSelect.addEventListener("click", (event) => {
  event.stopPropagation();
  permissionMenu.classList.toggle("hidden");
});

permissionMenu.addEventListener("click", (event) => event.stopPropagation());

document.querySelectorAll("[data-project-dialog-close]").forEach((button) => {
  button.addEventListener("click", () => {
    [createProjectDialog, projectSettingsDialog, projectDeleteDialog, projectShareDialog].forEach((dialog) => {
      dialog.classList.add("hidden");
      dialog.setAttribute("aria-hidden", "true");
    });
  });
});

[createProjectDialog, projectSettingsDialog, projectDeleteDialog, projectShareDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.classList.add("hidden");
  });
});

confirmCreateProject.addEventListener("click", () => {
  const name = newProjectName.value.trim() || "新项目";
  const row = document.createElement("article");
  row.className = "project-row";
  row.innerHTML = `<button class="project-name" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h7l2 2h9v10H3z" /></svg>${name}</button><span>今天</span><button class="project-more" type="button" aria-label="更多项目操作">...</button>`;
  document.querySelector(".project-table").appendChild(row);
  createProjectDialog.classList.add("hidden");
});

settingsDeleteProject.addEventListener("click", () => {
  projectSettingsDialog.classList.add("hidden");
  projectDeleteDialog.classList.remove("hidden");
});

confirmProjectDelete.addEventListener("click", () => {
  activeProjectRow?.remove();
  projectDeleteDialog.classList.add("hidden");
});

document.querySelectorAll(".history-item").forEach((button) => {
  button.addEventListener("click", () => setActiveChat(button));
});

document.querySelectorAll(".item-menu").forEach(bindMenuTrigger);
document.addEventListener("click", closeContextMenu);
document.addEventListener("click", closeProjectMenu);
document.addEventListener("click", closeLibraryFileMenu);
document.addEventListener("click", closeAccountMenu);
document.addEventListener("click", closeComposerPopovers);

contextMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const item = getMenuButton();
  const action = actionButton.dataset.action;
  closeContextMenu();

  if (action === "rename") {
    renameInput.value = item?.querySelector("span:first-child")?.textContent || "";
    openDialog(renameDialog);
    setTimeout(() => renameInput.focus(), 30);
  }
  if (action === "pin") togglePin(item);
  if (action === "share") openShare(item);
  if (action === "delete") openDialog(deleteDialog);
});

document.querySelectorAll(".mode-btn").forEach((button) => {
  button.addEventListener("click", () => setNewChatMode(button.dataset.mode));
});

document.querySelectorAll(".pill").forEach((button) => {
  button.addEventListener("click", () => button.classList.toggle("active"));
});

[
  [addToolButton, addPopover],
  [skillsToolButton, skillsPopover],
  [activeExpertPill, skillsPopover],
  [modelToolButton, modelPopover],
  [projectAddToolButton, addPopover],
  [projectSkillsToolButton, skillsPopover],
  [projectModelToolButton, modelPopover],
].forEach(([button, popover]) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleComposerPopover(button, popover);
  });
  popover.addEventListener("click", (event) => event.stopPropagation());
});

document.querySelectorAll("[data-skill-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-skill-filter]").forEach((tab) => tab.classList.toggle("active", tab === button));
    document.querySelectorAll("[data-skill-category]").forEach((item) => {
      item.classList.toggle("hidden", item.dataset.skillCategory !== button.dataset.skillFilter);
    });
  });
});

document.querySelectorAll("[data-featured-example]").forEach((button) => {
  button.addEventListener("click", () => renderFeaturedExample(button.dataset.featuredExample));
});

messages.addEventListener("click", async (event) => {
  const actionButton = event.target.closest("[data-answer-action]");
  if (!actionButton) return;
  const assistantMessage = actionButton.closest(".assistant");
  const action = actionButton.dataset.answerAction;

  if (action === "copy") {
    const content = assistantMessage.querySelector(".assistant-content")?.innerText || "";
    await copyText(content);
    actionButton.classList.add("done");
    setTimeout(() => actionButton.classList.remove("done"), 900);
  }

  if (action === "regen") {
    const content = assistantMessage.querySelector(".assistant-content");
    content.innerHTML = `
      <p>已重新生成。建议继续按目标指标、影响因素、执行优先级三层拆解，并把每一步绑定到可验证的数据上。</p>
      <h2>重新生成后的建议</h2>
      <ul>
        <li>先确认当前最关键的运营目标。</li>
        <li>筛出最影响结果的 2-3 个变量。</li>
        <li>用小步测试替代一次性大改，降低误判风险。</li>
      </ul>
    `;
  }

  if (action === "share") {
    openShare(document.querySelector(".history-item.active"));
  }
});

openLogin.addEventListener("click", openLoginModal);

[profileLogin, profileName, document.querySelector(".profile-row .icon-btn")].forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!isLoggedIn) {
      openLoginModal();
      return;
    }
    accountMenu.classList.toggle("hidden");
    accountMenu.setAttribute("aria-hidden", String(accountMenu.classList.contains("hidden")));
  });
});

accountMenu.addEventListener("click", (event) => event.stopPropagation());

logoutButton.addEventListener("click", () => {
  setLoggedOut();
});

function setPlanTab(tabName) {
  document.querySelectorAll("[data-plan-tab]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.planTab === tabName);
  });
  document.querySelectorAll("[data-plan-panel]").forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.planPanel !== tabName);
  });
}

function openUpgradePlansPage() {
  closeAccountMenu();
  setPlanTab("personal");
  upgradeDialog.classList.remove("hidden");
  upgradeDialog.setAttribute("aria-hidden", "false");
}

upgradePlanButton.addEventListener("click", openUpgradePlansPage);

accountManageButton.addEventListener("click", () => openAccountDialog("profile"));
billingButton?.addEventListener("click", () => openAccountDialog("billing"));
openUpgradeFromAccount.addEventListener("click", () => {
  closeAccountPanel();
  upgradePlanButton.click();
});
manageSeatsButton.addEventListener("click", () => setAccountTab("seats"));
backToSubscription.addEventListener("click", () => setAccountTab("subscription"));

document.querySelectorAll("[data-account-tab]").forEach((button) => {
  button.addEventListener("click", () => setAccountTab(button.dataset.accountTab));
});

closeAccountDialog.addEventListener("click", closeAccountPanel);
accountDialog.addEventListener("click", (event) => {
  if (event.target === accountDialog) closeAccountPanel();
});

function closeUpgradeDialog() {
  upgradeDialog.classList.add("hidden");
  upgradeDialog.setAttribute("aria-hidden", "true");
}

closeUpgrade.addEventListener("click", closeUpgradeDialog);
upgradeDialog.addEventListener("click", (event) => {
  if (event.target === upgradeDialog) closeUpgradeDialog();
});

document.querySelectorAll("[data-plan-tab]").forEach((button) => {
  button.addEventListener("click", () => setPlanTab(button.dataset.planTab));
});

const checkoutPlans = {
  free: {
    title: "免费版已可使用",
    subtitle: "你当前可以继续使用免费版基础能力",
    icon: "⌁",
    name: "免费版",
    desc: "入门级运营助手",
    price: "¥0",
    billing: "无需计费",
    due: "¥0",
  },
  pro: {
    title: "确认获取专业版",
    subtitle: "升级后可使用品牌记忆库、深度评论拆解和更高使用权限",
    icon: "⚡",
    name: "专业版",
    desc: "进阶级效率专家",
    price: "¥106 / 月",
    billing: "按月计费",
    due: "¥106",
  },
  max: {
    title: "确认获取Max版",
    subtitle: "适合需要全量额度、长文输出和专属运营大脑的团队",
    icon: "🚀",
    name: "Max版",
    desc: "战略级决策顾问",
    price: "¥625起 / 月",
    billing: "按月计费",
    due: "¥625起",
  },
};

Object.assign(checkoutPlans, {
  free: {
    title: "Free plan",
    subtitle: "You can keep using the basic WinWise plan.",
    icon: "⌁",
    name: "Free plan",
    desc: "Monthly",
    price: "USD 0",
    billing: "Monthly",
    due: "USD 0",
    renewal: "Your free plan is active. You will not be charged.",
  },
  pro: {
    title: "Pro plan",
    subtitle: "Upgrade to advanced WinWise operations tools.",
    icon: "⚡",
    name: "Pro 套餐",
    desc: "Monthly",
    price: "US$20.00",
    billing: "Monthly",
    due: "US$20.00",
    renewal: "将按每月自动续订，直至取消。将收取 US$20.00/月。可在设置中随时取消。订阅即表示你同意我们的使用条款和服务积分条款，已阅读隐私政策，并授权 WinWise 保存你的付款方式并进行扣费。",
  },
  max: {
    title: "Max Plan",
    subtitle: "Upgrade to the highest WinWise operations capacity.",
    icon: "🚀",
    name: "Max 套餐",
    desc: "Monthly",
    price: "US$88.00",
    billing: "Monthly",
    due: "US$88.00",
    renewal: "将按每月自动续订，直至取消。将收取 US$88.00/月。可在设置中随时取消。订阅即表示你同意我们的使用条款和服务积分条款，已阅读隐私政策，并授权 WinWise 保存你的付款方式并进行扣费。",
  },
});

function openCheckout(planKey) {
  const plan = checkoutPlans[planKey];
  closeUpgradeDialog();
  checkoutTitle.textContent = plan.title;
  checkoutSubtitle.textContent = plan.subtitle;
  checkoutIcon.textContent = plan.icon;
  checkoutPlanName.textContent = plan.name;
  checkoutPlanDesc.textContent = plan.desc;
  checkoutPrice.textContent = plan.price;
  checkoutBilling.textContent = plan.billing;
  checkoutSubtotal.textContent = "US$0.00";
  checkoutDue.textContent = plan.due;
  checkoutRenewal.textContent = plan.renewal;
  checkoutTitle.textContent = "配置套餐";
  planCheckoutDialog.classList.remove("hidden");
  planCheckoutDialog.setAttribute("aria-hidden", "false");
}

document.querySelectorAll("[data-plan-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.planAction === "free") {
      closeUpgradeDialog();
      closeCheckoutDialog();
      document.querySelector("#newChat").click();
      return;
    }
    openCheckout(button.dataset.planAction);
  });
});

function closeCheckoutDialog() {
  planCheckoutDialog.classList.add("hidden");
  planCheckoutDialog.setAttribute("aria-hidden", "true");
}

function returnToUpgradePlans() {
  closeCheckoutDialog();
  openUpgradePlansPage();
}

function openBusinessCheckoutDialog() {
  closeUpgradeDialog();
  setBusinessBilling("monthly");
  businessCheckoutDialog.classList.remove("hidden");
  businessCheckoutDialog.setAttribute("aria-hidden", "false");
}

function closeBusinessCheckoutDialog() {
  businessCheckoutDialog.classList.add("hidden");
  businessCheckoutDialog.setAttribute("aria-hidden", "true");
}

function setBusinessBilling(type) {
  const isYearly = type === "yearly";
  businessBillingChoices.forEach((choice) => {
    choice.classList.toggle("active", choice.dataset.businessBilling === type);
  });
  businessPlanLine.textContent = isYearly ? "5 x 按年订阅订阅" : "5 x 按月订阅订阅";
  businessPlanAmount.textContent = isYearly ? "US$1,200.00" : "US$125.00";
  businessDueAmount.textContent = isYearly ? "US$1,200.00" : "US$125.00";
  businessCheckoutNote.textContent = isYearly
    ? "按每年续订，直至取消。我们将按照活跃席位数收取 US$1,200.00。你可前往设置部分随时取消。订阅即表示，你同意 Business 条款，同时授权我们保存你的付款方式并向其收费。"
    : "按每月续订，直至取消。我们将按照活跃席位数收取 US$125.00。你可前往设置部分随时取消。订阅即表示，你同意 Business 条款，同时授权我们保存你的付款方式并向其收费。";
}

closeCheckout.addEventListener("click", returnToUpgradePlans);
backToPlans.addEventListener("click", returnToUpgradePlans);
planCheckoutDialog.addEventListener("click", (event) => {
  if (event.target === planCheckoutDialog) closeCheckoutDialog();
});
openBusinessCheckout.addEventListener("click", openBusinessCheckoutDialog);
closeBusinessCheckout.addEventListener("click", closeBusinessCheckoutDialog);
businessCheckoutDialog.addEventListener("click", (event) => {
  if (event.target === businessCheckoutDialog) closeBusinessCheckoutDialog();
});
businessBillingChoices.forEach((choice) => {
  choice.addEventListener("click", () => setBusinessBilling(choice.dataset.businessBilling));
});

closeLogin.addEventListener("click", closeLoginModal);
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) closeLoginModal();
});

googleLogin.addEventListener("click", () => setLoggedIn("Google 用户"));
headerShare.addEventListener("click", () => openShare(document.querySelector(".history-item.active")));

document.querySelectorAll("[data-dialog-close]").forEach((button) => {
  button.addEventListener("click", () => {
    [deleteDialog, shareDialog, renameDialog].forEach(closeDialog);
  });
});

[deleteDialog, shareDialog, renameDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
});

document.querySelector("#confirmDelete").addEventListener("click", () => deleteChat(getMenuButton()));
document.querySelector("#confirmRename").addEventListener("click", () => renameChat(getMenuButton()));

renameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") renameChat(getMenuButton());
});

createShare.addEventListener("click", async () => {
  await copyText(shareUrl.textContent);
  createShare.classList.add("hidden");
  shareResult.classList.remove("hidden");
});

copyShare.addEventListener("click", async () => {
  await copyText(shareUrl.textContent);
  copyShare.textContent = "已复制";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#emailInput").value.trim();
  if (email) setLoggedIn(email);
});

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = promptInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  promptInput.value = "";
  promptInput.style.height = "auto";
  setTimeout(() => {
    addMessage("WinWise 已收到。建议先明确目标指标，再拆解影响因素，我可以继续把这个问题整理成可执行清单。", "assistant");
  }, 360);
});

promptInput.addEventListener("input", () => {
  promptInput.style.height = "auto";
  promptInput.style.height = `${Math.min(promptInput.scrollHeight, 180)}px`;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLoginModal();
    [deleteDialog, shareDialog, renameDialog].forEach(closeDialog);
    searchDialog.classList.add("hidden");
    searchDialog.setAttribute("aria-hidden", "true");
    closeAccountMenu();
    closeAccountPanel();
    closeUpgradeDialog();
    closeCheckoutDialog();
    closeBusinessCheckoutDialog();
    closeComposerPopovers();
    closeProjectMenu();
    closeLibraryFileMenu();
    closeLibraryDeleteDialog();
    closeDialog(expertDialog);
    closeUploadSkillDialog();
    closeLibraryDialog();
    permissionMenu.classList.add("hidden");
    [createProjectDialog, projectSettingsDialog, projectDeleteDialog, projectShareDialog].forEach((dialog) => dialog.classList.add("hidden"));
    closeContextMenu();
  }
  if (event.key === "Enter" && !event.shiftKey && document.activeElement === promptInput) {
    event.preventDefault();
    composer.requestSubmit();
  }
});

refreshPinnedVisibility();
limitHistoryGroups();
setLoggedOut();
document.querySelector("#newChat").click();
