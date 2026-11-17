// Investing primer content for the "Primer" tab. Hand-written; body strings are trusted HTML.
// Keep en and zh in step: same number of sections, same order.
window.PRIMER={
en:{
title:"Healthcare investing primer",
lede:"A short guide for people new to pharma stocks: what drives a drug company's value, and how to use this atlas to look into one. Informational only, not investment advice.",
sections:[
{id:"dev",h:"1. How a drug gets to market",body:
"<p>Most medicines go through the same stages. Each one costs more and takes longer than the last, and most candidates fail along the way.</p>"+
"<table class='ptab'><thead><tr><th>Stage</th><th>What it tests</th><th>Typical size</th></tr></thead><tbody>"+
"<tr><td>Phase 1</td><td>Safety and dosing</td><td>Dozens of people</td></tr>"+
"<tr><td>Phase 2</td><td>First signs it works; picking the dose</td><td>Around 100 to a few hundred patients</td></tr>"+
"<tr><td>Phase 3</td><td>Large trials that confirm benefit against placebo or the current standard</td><td>Hundreds to thousands</td></tr>"+
"<tr><td>Filed / under review</td><td>Regulators (FDA in the US, EMA in Europe, NMPA in China, PMDA in Japan) review the data</td><td>A standard FDA review takes about a year from submission; a priority review about 8 months</td></tr>"+
"</tbody></table>"+
"<p>An industry study of 2011–2020 programmes found that only about <b>8%</b> of drugs entering Phase 1 were eventually approved. The odds by step were roughly 52% (Phase 1 to 2), 29% (Phase 2 to 3), 58% (Phase 3 to filing) and 91% (filing to approval). Phase 2 is where most candidates fail. <a href='https://go.bio.org/rs/490-EHZ-999/images/ClinicalDevelopmentSuccessRates2011_2020.pdf' target='_blank' rel='noopener'>Source: BIO, Informa and QLS ↗</a></p>"+
"<p><b>What this means:</b> a Phase 3 or filed asset is worth far more than a Phase 1 one. When you count a pipeline, weight late-stage assets heavily.</p>"},
{id:"loe",h:"2. Patent cliffs (loss of exclusivity)",body:
"<p>A new drug is protected by patents and regulatory exclusivity. When that ends, copies arrive: <b>generics</b> for small-molecule pills, which can take most of the sales within a year or two, and <b>biosimilars</b> for biologics (antibodies, proteins), where the erosion is usually slower but still large.</p>"+
"<p>In the US, a new small-molecule drug gets 5 years of data exclusivity and a new biologic gets 12, but the patents usually matter more and are often fought over in court. The date that matters is when the main patents run out and copies can launch. This atlas calls that LOE (loss of exclusivity).</p>"+
"<p><b>What to check:</b> what share of revenue comes from products losing exclusivity in the next 3–5 years, and whether the pipeline can replace it. In a company panel, see the LOE timeline under Top products.</p>"},
{id:"conc",h:"3. Concentration: how much rides on one product",body:
"<p>Many large drug companies get a quarter or more of their revenue from a single product. That is fine while it grows, but it makes the company sensitive to one patent, one competitor or one pricing decision.</p>"+
"<p><b>What to check:</b> the share bar at the top of Top products in each company panel shows how concentrated revenue is. A high share plus an LOE date within a few years is the classic patent-cliff setup.</p>"},
{id:"pipe",h:"4. Reading a pipeline",body:
"<ul><li><b>Count late-stage assets</b> (filed and Phase 3) rather than the total. Big companies list 50–100+ programmes; most early ones will not reach the market.</li>"+
"<li><b>Look at where they are.</b> Assets aimed at large markets (obesity, cancer, immunology, Alzheimer's) matter more than niche indications, unless the company is small.</li>"+
"<li><b>New drug or new use?</b> A new indication for an existing drug extends its life but does not solve that drug's patent cliff.</li>"+
"<li><b>Home-grown or bought in?</b> Licensed and acquired assets are normal, but the partner usually takes milestones and royalties, so less of the value stays with the company.</li>"+
"<li><b>Upcoming catalysts.</b> Trial readouts and approval decisions are the dates that move share prices. Each company's Pipeline section lists the next milestone the company has stated.</li></ul>"},
{id:"deals",h:"5. Licensing deals and headline numbers",body:
"<p>Deal announcements often quote a large total, such as \"up to $5 billion\". Usually only the <b>upfront payment</b> is certain; the rest are <b>milestones</b> paid only if the drug hits development, approval or sales targets, plus <b>royalties</b> on future sales. Compare the upfront amount, not the headline.</p>"+
"<p>Since about 2023 a growing share of in-licensed assets has come from Chinese biotechs. For Chinese companies such as Hengrui, out-licensing income has become a real profit line. See the Graph view for who has licensed what from whom.</p>"},
{id:"policy",h:"6. Prices and policy",body:
"<ul><li><b>US Medicare negotiation (Inflation Reduction Act).</b> Medicare can negotiate prices for some top-selling drugs. Small molecules become eligible 7 years after approval and biologics 11 years after; negotiated prices take effect two years later. The first negotiated prices started on 1 January 2026.</li>"+
"<li><b>China.</b> Volume-based procurement (VBP) tenders for off-patent drugs bring steep price cuts. New drugs enter the national reimbursement list (NRDL) through annual price negotiations.</li>"+
"<li><b>Europe and Japan.</b> Governments set or negotiate prices, and Japan usually revises them every year, so price erosion is part of the business.</li></ul>"},
{id:"fin",h:"7. Money: R&D, debt and dividends",body:
"<ul><li><b>R&D spending.</b> Large innovative drug companies typically spend around 15–25% of sales on R&D; generic-focused companies spend much less.</li>"+
"<li><b>Debt.</b> Big acquisitions are usually paid for with debt. Rising net debt limits a company's room for the next deal.</li>"+
"<li><b>Cash returns.</b> Mature pharma companies often pay steady dividends; younger biotechs usually pay none and may need to raise money.</li>"+
"<li><b>Generics and manufacturing.</b> For generic makers (many Indian companies, Teva, Viatris, Sandoz), FDA inspection results and warning letters can matter as much as the pipeline.</li></ul>"},
{id:"flags",h:"8. Common traps",body:
"<ul><li>\"Positive topline results\" with no numbers: wait for the full data at a medical meeting.</li>"+
"<li>Surrogate endpoints (for example a lab value instead of survival) and accelerated approvals can be reversed if the confirmatory trial fails.</li>"+
"<li>Comparing trial results across different studies: patient populations differ, so head-to-head claims need head-to-head trials.</li>"+
"<li>One-asset stories: a single readout can halve or double a small company.</li>"+
"<li>Past share-price performance: the five-year chart shows what happened, not what will happen.</li></ul>"},
{id:"check",h:"9. A checklist for any company in this atlas",body:
"<ol><li>Open the company in the Graph or Top 100 view.</li>"+
"<li><b>Top products:</b> how concentrated is revenue, and when are the LOE dates?</li>"+
"<li><b>Pipeline:</b> how many filed and Phase 3 assets, and in which areas? What are the next milestones?</li>"+
"<li><b>What to watch:</b> the risks and catalysts listed for that company.</li>"+
"<li><b>Collaborations and competitors:</b> who does it depend on, and who is chasing the same patients?</li>"+
"<li><b>Compare</b> it side by side with a peer.</li>"+
"<li>Then read the company's latest annual report and results presentation. This atlas is a starting point, not a substitute.</li></ol>"}
]},
zh:{
title:"医药投资入门",
lede:"写给刚开始关注医药股的人:一家药企的价值由什么驱动,以及如何用这张图谱去研究一家公司。仅供参考,不构成投资建议。",
sections:[
{id:"dev",h:"1. 一个药如何上市",body:
"<p>大多数药物要走同样的几个阶段,每一步都比上一步更贵、更久,大多数候选药会在途中失败。</p>"+
"<table class='ptab'><thead><tr><th>阶段</th><th>验证什么</th><th>典型规模</th></tr></thead><tbody>"+
"<tr><td>I 期</td><td>安全性与剂量</td><td>几十人</td></tr>"+
"<tr><td>II 期</td><td>初步疗效、确定剂量</td><td>约一百到数百名患者</td></tr>"+
"<tr><td>III 期</td><td>大规模试验,对照安慰剂或现有标准疗法确认获益</td><td>数百到数千人</td></tr>"+
"<tr><td>申报 / 审评中</td><td>监管机构审评数据(美国 FDA、欧洲 EMA、中国 NMPA、日本 PMDA)</td><td>FDA 标准审评从递交起约一年,优先审评约 8 个月</td></tr>"+
"</tbody></table>"+
"<p>一项针对 2011–2020 年研发项目的行业研究显示,进入 I 期的药物最终只有约 <b>8%</b> 获批。各阶段的成功率大约是:I 期到 II 期 52%,II 期到 III 期 29%,III 期到申报 58%,申报到获批 91%。II 期是失败最多的阶段。<a href='https://go.bio.org/rs/490-EHZ-999/images/ClinicalDevelopmentSuccessRates2011_2020.pdf' target='_blank' rel='noopener'>来源:BIO、Informa、QLS ↗</a></p>"+
"<p><b>这意味着:</b>一个 III 期或已申报的品种,价值远高于 I 期品种。数管线时,应重点看后期品种。</p>"},
{id:"loe",h:"2. 专利悬崖(独占期结束)",body:
"<p>新药受专利和监管独占期保护。保护结束后,仿制品就会进入:小分子药是<b>仿制药</b>,往往一两年内就能拿走大部分销售额;生物药(抗体、蛋白)是<b>生物类似药</b>,侵蚀通常慢一些,但幅度仍然很大。</p>"+
"<p>在美国,新小分子药有 5 年数据保护,新生物药有 12 年,但真正起作用的通常是专利,而且专利常在法庭上被挑战。关键是核心专利到期、仿制品可以上市的时间,本图谱称之为 LOE(独占期结束)。</p>"+
"<p><b>要看什么:</b>未来 3–5 年失去独占期的产品占收入多少,管线能否补上。在公司面板的“Top products”下方可以看到 LOE 时间轴。</p>"},
{id:"conc",h:"3. 集中度:多少收入押在一个产品上",body:
"<p>不少大型药企四分之一以上的收入来自单一产品。产品增长时这没问题,但公司会对一项专利、一个竞争对手或一次定价决定格外敏感。</p>"+
"<p><b>要看什么:</b>公司面板“Top products”顶部的占比条显示收入集中程度。占比高、LOE 又在几年之内,就是典型的专利悬崖。</p>"},
{id:"pipe",h:"4. 怎么读一条管线",body:
"<ul><li><b>数后期品种</b>(已申报和 III 期),而不是总数。大公司常列出 50–100 多个项目,大部分早期项目到不了市场。</li>"+
"<li><b>看所在领域。</b>面向大市场(肥胖、肿瘤、免疫、阿尔茨海默病)的品种分量更重;小公司则另当别论。</li>"+
"<li><b>新药还是新适应症?</b>老药拓展新适应症可以延长生命周期,但解决不了这个药自身的专利悬崖。</li>"+
"<li><b>自研还是引进?</b>引进和收购的品种很常见,但合作方通常拿走里程碑付款和销售分成,留在公司的价值更少。</li>"+
"<li><b>近期催化剂。</b>试验读出和审批决定是最能影响股价的日子。每家公司的“研发管线”部分列出了公司公布的下一个里程碑。</li></ul>"},
{id:"deals",h:"5. 授权交易与“总金额”",body:
"<p>交易公告常写一个很大的总额,比如“最高 50 亿美元”。通常只有<b>首付款</b>是确定的,其余是达到研发、获批或销售目标才支付的<b>里程碑付款</b>,外加未来销售的<b>分成</b>。比较交易时应看首付款,而不是总额。</p>"+
"<p>大约从 2023 年起,跨国药企引进的品种中来自中国生物科技公司的比例越来越高。对恒瑞等中国公司来说,对外授权收入已经成为实实在在的利润来源。在 Graph 视图中可以看到谁从谁那里引进了什么。</p>"},
{id:"policy",h:"6. 价格与政策",body:
"<ul><li><b>美国 Medicare 价格谈判(《通胀削减法案》IRA)。</b>Medicare 可以就部分畅销药谈判价格。小分子药获批 7 年后、生物药获批 11 年后进入候选范围,谈判价格在两年后生效。首批谈判价格已于 2026 年 1 月 1 日生效。</li>"+
"<li><b>中国。</b>过专利期药品的带量采购(集采)带来大幅降价;新药通过每年一次的国家医保目录谈判进入报销。</li>"+
"<li><b>欧洲和日本。</b>由政府定价或谈判,日本通常每年调价,价格下行是常态。</li></ul>"},
{id:"fin",h:"7. 钱:研发投入、负债与分红",body:
"<ul><li><b>研发投入。</b>大型创新药企的研发费用通常约占销售额的 15–25%,以仿制药为主的公司则低得多。</li>"+
"<li><b>负债。</b>大型收购通常靠举债完成,净负债上升会限制下一笔交易的空间。</li>"+
"<li><b>股东回报。</b>成熟的大药企通常稳定分红;年轻的生物科技公司一般不分红,还可能需要融资。</li>"+
"<li><b>仿制药与生产。</b>对仿制药企业(许多印度公司、Teva、Viatris、Sandoz)来说,FDA 检查结果和警告信可能与管线同样重要。</li></ul>"},
{id:"flags",h:"8. 常见误区",body:
"<ul><li>只有“顶线结果积极”而没有数字:等医学会议上的完整数据。</li>"+
"<li>替代终点(比如用化验指标代替生存期)和加速批准:确证性试验失败的话可能被撤回。</li>"+
"<li>跨试验比较疗效:患者人群不同,真正的优劣需要头对头试验。</li>"+
"<li>单一品种公司:一次读出就可能让小公司的股价腰斩或翻倍。</li>"+
"<li>过去的股价表现:五年走势图展示的是已经发生的事,不是未来。</li></ul>"},
{id:"check",h:"9. 研究图谱中任意一家公司的清单",body:
"<ol><li>在 Graph 或 Top 100 视图中打开这家公司。</li>"+
"<li><b>Top products:</b>收入有多集中?LOE 在什么时候?</li>"+
"<li><b>研发管线:</b>有多少已申报和 III 期品种,在哪些领域?下一个里程碑是什么?</li>"+
"<li><b>值得关注:</b>为这家公司列出的风险与催化剂。</li>"+
"<li><b>合作与竞争:</b>它依赖谁?谁在争夺同一批患者?</li>"+
"<li>用 Compare 视图和同行并排比较。</li>"+
"<li>然后去读公司最新的年报和业绩演示材料。本图谱只是起点,不能替代它们。</li></ol>"}
]}
};
