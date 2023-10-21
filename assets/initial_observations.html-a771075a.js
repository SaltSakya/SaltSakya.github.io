import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as r,c,d as o,a as s,b as a,e as l,w as i,f as t}from"./app-2685e7e5.js";const h="/unityshaderbible/13-0.png",g="/unityshaderbible/14-0.png",d="/unityshaderbible/15-0.png",u="/unityshaderbible/15-1.png",y="/unityshaderbible/16-0.png",v="/unityshaderbible/17-0.png",_="/unityshaderbible/17-1.png",b="/unityshaderbible/18-0.png",f="/unityshaderbible/19-0.png",x="/unityshaderbible/20-0.png",z="/unityshaderbible/21-0.png",w="/unityshaderbible/22-0.png",U="/unityshaderbible/22-1.png",M="/unityshaderbible/23-0.png",P="/unityshaderbible/25-0.png",k="/unityshaderbible/29-0.png",V="/unityshaderbible/30-0.png",T="/unityshaderbible/30-1.png",I="/unityshaderbible/31-0.png",R={},H=t("<p>许多年前，当我刚开始学习 Unity 中的 Shader 时，理解书中的许多内容是一项巨大的挑战。我仍记得那天的学习，我想要理解语义 <code>POSITION[n]</code> 的操作；然而，当我想找到它的定义时，我发现了如下的陈述：</p><blockquote><p>Vertex position in object-space.<br> 物体空间的顶点位置。</p></blockquote><p>那一刻，我问自己，啥叫物体空间的顶点位置？然后我意识到，在开始学习之前，我必须要知道这一学科的一些基础知识。</p><p>在我的经验中，我可以说出至少四个有助于理解着色器和他们的结构的基本领域，如<strong>多边形物体属性</strong>、<strong>渲染管线结构</strong>、<strong>矩阵</strong>和<strong>坐标系统</strong>。</p>",4),N=s("h2",{id:"_1-1-多边形物体属性",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-1-多边形物体属性","aria-hidden":"true"},"#"),a(" 1.1 多边形物体属性")],-1),B=s("p",null,[a("英语中 polygon 一词来自希腊语，它由 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"p"),s("mi",null,"o"),s("mi",null,"l"),s("msub",null,[s("mi",null,"y"),s("mtext",null,"(多)")])]),s("annotation",{encoding:"application/x-tex"},"poly_{\\text{(多)}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0496em","vertical-align":"-0.3552em"}}),s("span",{class:"mord mathnormal"},"p"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"("),s("span",{class:"mord cjk_fallback mtight"},"多"),s("span",{class:"mord mtight"},")")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])])])])]),a(" 和 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"g"),s("mi",null,"n"),s("mi",null,"o"),s("msub",null,[s("mi",null,"w"),s("mtext",null,"(角)")])]),s("annotation",{encoding:"application/x-tex"},"gnow_{\\text{(角)}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7858em","vertical-align":"-0.3552em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"g"),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord mathnormal"},"o"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.02691em"}},"w"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3448em"}},[s("span",{style:{top:"-2.5198em","margin-left":"-0.0269em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord mtight"},"("),s("span",{class:"mord cjk_fallback mtight"},"角"),s("span",{class:"mord mtight"},")")])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3552em"}},[s("span")])])])])])])])]),a(" 组成。根据定义，一个多边形代表一个以若干线段作为边界的封闭平面图形。")],-1),L=t('<figure><img src="'+h+'" alt="图 1.1a" tabindex="0" loading="lazy"><figcaption>图 1.1a</figcaption></figure><p><strong>基本体</strong>是一个由多边形构成的三维几何物体，在不同的开发软件中作为预定义的物体。在 Unity、Maya、Blender 中，我们可以找到其他基本体，最常见的有：球体、盒体、四边形、圆柱体和胶囊体。这些物体有着不同的形状，但属性相似；都有<em>顶点</em>、<em>切线</em>、<em>法线</em>、<em>UV坐标</em>和<em>颜色</em>，这些属性存储在一个叫“<em>网格</em>”的数据类型中。</p><p>我们可以在着色器中独立地访问所有这些属性，并把他们保存在向量中（如<code>float4 pos: POSITION[n]</code>）。这样很好，因为我们可以修改它们的值，并以此创造激动人心的效果。为了更好地理解这个概念，我们将对多边形的属性进行说明。</p><figure><img src="'+g+'" alt="图 1.1b" tabindex="0" loading="lazy"><figcaption>图 1.1b</figcaption></figure><h3 id="_1-1-1-顶点" tabindex="-1"><a class="header-anchor" href="#_1-1-1-顶点" aria-hidden="true">#</a> 1.1.1 顶点</h3><p>物体的顶点，对应于一组在二维或三维空间中定义的表面区域的点。在 Maya 或 Blender 中，顶点表示为网格和物体的交点。</p><p>这些点主要有两个特点：</p><ol><li>他们是 <code>Transform</code> 组件的子级。</li><li>他们有根据物体总体积的中心定义的位置。</li></ol><p>这是什么意思？假设，在 Maya 3D，有两个默认的节点关联到一个物体。这两个节点称为<strong>变换</strong>和<strong>形状</strong>。变换节点和 Unity 中一样，定义了一个物体关于其轴心的位置、旋转和缩放。而形状节点，作为变换节点的子节点，则包含几何属性，是物体的顶点关于其体积的位置。这意味着我们可以移动、旋转或缩放物体的顶点集，但同时，我们也可以改变某个或者某些指定顶点的位置。</p><p>前文中举例提到的 <code>POSITION[n]</code> 正是允许访问与体积有关的顶点位置的语义，即访问形状节点从Maya导出的配置的语义。</p><figure><img src="'+d+'" alt="图 1.1.1a 左图可见 Maya 中的变换节点，右图则是形状节点" tabindex="0" loading="lazy"><figcaption>图 1.1.1a 左图可见 Maya 中的变换节点，右图则是形状节点</figcaption></figure><h3 id="_1-1-2-法线" tabindex="-1"><a class="header-anchor" href="#_1-1-2-法线" aria-hidden="true">#</a> 1.1.2 法线</h3><p>我们来想象一下，假设我们有一张白纸，我们让一个朋友在这张纸的正面画点东西。如果白纸的两面都一样，那我们要如何确定哪一面才是白纸的正面呢？这就是<strong>法线</strong>存在的意义。法线对应于多边形表面的垂直向量，其用来决定一个面或顶点的方向或朝向。</p><p>Maya 中，我们可以通过选择属性<strong>顶点法线</strong>来可视化物体的法线。这让我们可以看见顶点在空间中的位置，并决定物体不同表面之间的硬度。</p><figure><img src="'+u+'" alt="图 1.1.2a 每个顶点法线的图形学表示" tabindex="0" loading="lazy"><figcaption>图 1.1.2a 每个顶点法线的图形学表示</figcaption></figure><h3 id="_1-1-3-切线" tabindex="-1"><a class="header-anchor" href="#_1-1-3-切线" aria-hidden="true">#</a> 1.1.3 切线</h3><p>根据 Unity 的官方文档<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>：</p><blockquote><p>切线是单位长度的矢量，它顺着网格表面沿水平纹理方向。</p></blockquote><p>这是什么意思？切线沿着每个几何体平面上 UV 坐标的 U 方向。</p><figure><img src="'+y+'" alt="图 1.1.3a 默认情况下，我们无法在着色器中获取到副法线。因此，我们必须使用法线和切线来计算它。" tabindex="0" loading="lazy"><figcaption>图 1.1.3a 默认情况下，我们无法在着色器中获取到副法线。因此，我们必须使用法线和切线来计算它。</figcaption></figure>',20),A=t('<h3 id="_1-1-4-uv-坐标" tabindex="-1"><a class="header-anchor" href="#_1-1-4-uv-坐标" aria-hidden="true">#</a> 1.1.4 UV 坐标</h3><p>我们为所有我们喜欢的角色都换上了更好看的皮肤。UV 坐标与这个概念直接相关，因为他们让我们在三位物体表面上定位二维贴图。这些坐标作为参考点，它控制着纹理贴图上的哪一个纹素（texel，texture pixel）对应着网格上的顶点。</p><p>在 UV 坐标中定位顶点的过程叫“UV 映射”。在这个过程中，UV 作为一个物体网格的平面二维表示被创建、编辑和组织。在我们的着色器中，我们可以访问此属性，既可以在 3D 模型上定位贴图，也可以在其中保存信息。</p><figure><img src="'+v+'" alt="图 1.1.4a 在 UV 贴图中，顶点可以以不同的方式排列。" tabindex="0" loading="lazy"><figcaption>图 1.1.4a 在 UV 贴图中，顶点可以以不同的方式排列。</figcaption></figure><p>UV 坐标的范围在 0.0f 到 0.1f 之间，其中 0 代表起点，而 1 代表终点。</p><figure><img src="'+_+'" alt="图 1.1.4b 笛卡尔平面中 UV 坐标的图形参考" tabindex="0" loading="lazy"><figcaption>图 1.1.4b 笛卡尔平面中 UV 坐标的图形参考</figcaption></figure><h3 id="_1-1-5-顶点颜色" tabindex="-1"><a class="header-anchor" href="#_1-1-5-顶点颜色" aria-hidden="true">#</a> 1.1.5 顶点颜色</h3><p>3D 软件在导出一个物体时，会指定一个颜色，改颜色受光照影响，或者从另一种颜色复制而来。这种颜色被称作<strong>顶点颜色</strong>，默认情况下对应白色，在 RGBA 通道上均为 1。之后我们会在实践中看到这个概念。</p><h2 id="_1-2-渲染管线架构" tabindex="-1"><a class="header-anchor" href="#_1-2-渲染管线架构" aria-hidden="true">#</a> 1.2 渲染管线架构</h2><p>最新版本的 Unity 中，有三种类型的渲染管线：<strong>内置渲染管线（Built-in RP）</strong>、<strong>通用渲染管线（URP）</strong>（旧版中叫<strong>轻量渲染管线（Lightweight RP）</strong>）和<strong>高清渲染管线（HDRP）</strong>。</p><p>我们有必要了解，什么是渲染管线？要回答这个问题，我们首先需要理解“管线”的概念。</p><p>管线是一系列执行更具体任务操作的阶段。那渲染管线是什么呢？我们把这个概念想象成把一个多边形物体（例如一个拓展名为 .fbx 的物体）渲染到电脑屏幕上的整个过程；就好像一个物体穿过超级马里奥的管子直到他抵达终点。因此，每个渲染管线都有其特性，并且取决于我们使用的类型：材质属性、光源、贴图以及着色器内部的所有函数，都会影响物体在屏幕上的外观和优化。</p><p>现在，这个过程是如何发生的？ 为此，我们得说说基础渲染管线架构。 Unity 将这个架构分为了 4 个阶段： 应用、几何处理、光栅化和像素处理。</p><p>请注意，这对应于实时渲染引擎中渲染管线的基础模型。提到的每个阶段都有线程，我们会在之后解释。</p><figure><img src="'+b+'" alt="图 1.2a 逻辑渲染管线" tabindex="0" loading="lazy"><figcaption>图 1.2a 逻辑渲染管线</figcaption></figure><h3 id="_1-2-1-应用阶段" tabindex="-1"><a class="header-anchor" href="#_1-2-1-应用阶段" aria-hidden="true">#</a> 1.2.1 应用阶段</h3><p>应用阶段从 CPU 开始，并且负责场景内发生的各种操作，例如</p><ul><li>碰撞检测</li><li>纹理动画</li><li>键盘输入</li><li>鼠标输入及其他</li></ul><p>他的功能是从内存中读取存储的数据，以便稍后生成<em>基本体</em>（例如三角形、线、顶点）。在应用阶段结束时，所有这些信息会被发送到几何处理阶段，并通过矩阵乘法生成顶点变换。</p><figure><img src="'+f+'" alt="图 1.2.1a" tabindex="0" loading="lazy"><figcaption>图 1.2.1a</figcaption></figure><h3 id="_1-2-2-几何处理阶段" tabindex="-1"><a class="header-anchor" href="#_1-2-2-几何处理阶段" aria-hidden="true">#</a> 1.2.2 几何处理阶段</h3><p>CPU 向 GPU 请求我们要在屏幕上看到的图像。这些请求被分为两个主要步骤：</p><ol><li>配置渲染状态，对应于从几何处理到像素处理的一系列阶段。</li><li>之后，在屏幕上绘制物体。</li></ol><p>几何处理阶段发生在 GPU 上，并负责处理物体的顶点。 这个阶段被分为 4 个子过程，即： <em>顶点着色</em>、<em>投影</em>、<em>裁剪</em>和<em>屏幕映射</em>。</p><figure><img src="'+x+'" alt="图 1.2.2a" tabindex="0" loading="lazy"><figcaption>图 1.2.2a</figcaption></figure><p>当基本体已经在应用阶段装配好时，顶点着色，通常也称作<strong>顶点着色器阶段</strong>，处理两个主要任务：</p><ol><li>计算物体上顶点的位置。</li><li>变换他的位置到不同的坐标系，以便其可以被投影到电脑屏幕上。</li></ol><p>此外，在这个子阶段，我们可以选择我们要传递给后续阶段的属性。这意味着，我们可以在<strong>顶点着色器阶段</strong>引用<em>法线</em>、<em>切线</em>、<em>UV坐标</em>等。</p><p><em>投影</em>和<em>裁剪</em>作为这个过程的一部分发生，根据我们场景中摄像机的属性而有所不同。值得一提的是，整个渲染过程仅仅会发生在那些在摄像机视锥体内的元素上，这个视锥体也就是我们熟知的<em>观察空间</em>，或者叫<em>相机空间</em>。</p><p><em>投影</em>和<em>裁剪</em>取决于我们的摄像机被设置为透视还是正交（平行）。为了理解这个过程，假设我们的场景中有一个球体，它有一半在视锥体外，因此，这个球体只有在视锥体内部的区域会被投影，并随后裁剪到屏幕上，也就是说，球体上在视锥体外的区域会在渲染过程中被丢弃。</p><figure><img src="'+z+'" alt="图 1.2.2b" tabindex="0" loading="lazy"><figcaption>图 1.2.2b</figcaption></figure><p>一旦在内存中有了裁剪好的物体，他们会在之后发送到屏幕映射。在这个阶段，我们场景中的三维物体会被变换到屏幕坐标，也叫窗口坐标。</p><h3 id="_1-2-3-光栅化阶段" tabindex="-1"><a class="header-anchor" href="#_1-2-3-光栅化阶段" aria-hidden="true">#</a> 1.2.3 光栅化阶段</h3><p>我们的第三个阶段对应于光栅化。此时，我们的物体拥有屏幕坐标（2D 坐标），现在我们必须查找投影区域的像素。寻找所有被一个在屏幕上的物体占据的像素的过程，就是光栅化。这个过程可以被看作是同步场景中的物体和屏幕上的像素的一步。</p><p>对于每个物体，<strong>光栅化程序</strong>执行两个过程：</p><ol><li>三角形设置。</li><li>三角形遍历。</li></ol><p>三角形设置负责生成要发送给三角形遍历的数据。 它包含屏幕上物体的边的方程。 三角形遍历列出被多边形物体区域覆盖的像素。 通过这种方式，可以生成一组被称作“片元”的像素。 然而，这个词也会在很多地方用于指代单个像素。</p><h3 id="_1-2-4-像素处理阶段" tabindex="-1"><a class="header-anchor" href="#_1-2-4-像素处理阶段" aria-hidden="true">#</a> 1.2.4 像素处理阶段</h3><p>使用之前过程中的插值，当所有像素都准备好投影到屏幕上时，最后一个阶段就开始了。此时，<strong>片元着色器阶段</strong>（也被成为<strong>像素着色器阶段</strong>）开始，负责每个像素的可见性。它的作用基本上就是计算像素的最终颜色，并将其发送到<em>颜色缓冲区</em>。</p><figure><img src="'+w+'" alt="图 1.2.4a 被几何体覆盖的区域被转换为屏幕上的像素" tabindex="0" loading="lazy"><figcaption>图 1.2.4a 被几何体覆盖的区域被转换为屏幕上的像素</figcaption></figure><h2 id="_1-3-渲染管线类型" tabindex="-1"><a class="header-anchor" href="#_1-3-渲染管线类型" aria-hidden="true">#</a> 1.3 渲染管线类型</h2><p>正如我们所知，Unity 中有 3 种渲染管线。默认情况下，我们可以找到与软件中最古老的引擎对应的<strong>内置渲染管线</strong>，另外，<strong>通用渲染管线（URP）<strong>和</strong>高清渲染管线（HDRP）<strong>属于一种</strong>可编程渲染管线</strong>，他是更新的，也为了更好的图形表现进行了预优化。</p><figure><img src="'+U+'" alt="图 1.3a 我们在 Unity 中新建工程时，可以在 3 种渲染引擎中选择。我们的选择要取决于当前项目的需要" tabindex="0" loading="lazy"><figcaption>图 1.3a 我们在 Unity 中新建工程时，可以在 3 种渲染引擎中选择。我们的选择要取决于当前项目的需要</figcaption></figure><p>不论什么渲染管线，如果我们想在屏幕上生成一张图片，我们都需要经过“管线”。</p><p>渲染管线可以有不同的处理路径。我们称其为<strong>渲染路径</strong>；就好像 1.2 中举得管道的例子中可以有不止一种方法到达目的地。</p><p>一条渲染路径对应一系列的操作，这些操作与光照和着色物体相关。这让我们可以以图形的方式处理照明场景（例如，一个有平行光和一个球体的场景）。</p><p>这些路径的例子有<em>前向渲染</em>、<em>延迟渲染</em>、<em>旧版延迟</em>和<em>旧版顶点光照</em>。每一个都有不同的功能和特点。</p><p>在 Unity 中，默认的渲染路径是<strong>前向渲染</strong>；这是 Unity 中包含的三种管道渲染的初始路径。 这是因为它有更好的显卡兼容性和光照计算限制，使其成为一个更优化的过程。</p><p>请注意在 URP 中，我们只能使用<em>前向渲染</em>作为渲染路径，而 HDRP 则可以使用<em>前向渲染</em>或<em>延迟渲染</em>进行照明材质渲染。</p><figure><img src="'+M+'" alt="图 1.3b 要在内置渲染管线中选择渲染路径，我们需要到 Hierarchy，选择主相机并在“渲染路径”属性中根据我们项目的需要更改配置。" tabindex="0" loading="lazy"><figcaption>图 1.3b 要在内置渲染管线中选择渲染路径，我们需要到 Hierarchy，选择主相机并在“渲染路径”属性中根据我们项目的需要更改配置。</figcaption></figure><p>要理解这个概念，我们要假设场景中有一个“物体”和一个“平行光”。 光和物体之间的交互基于两点，他们是：</p><ol><li>光照特性</li><li>材质特性</li></ol><p>这两个元素之间的交互叫做<strong>光照模型</strong>。</p><p>基本光照模型对应 3 种不同的属性，即环境色、漫反射和镜面反射。</p><p>光照计算在着色器中执行，它可以<em>逐个顶点</em>执行，也可以<em>逐个片元</em>执行。 当照明按照顶点计算时，他称作<em>逐顶点光照</em>，并在<strong>顶点着色器阶段</strong>执行，同样的，当它逐<em>片元</em>计算时，称作<em>逐片元</em>或<em>逐像素着色器</em>，并在<strong>片元着色器阶段执行</strong>。</p><h2 id="_1-3-1-前向渲染" tabindex="-1"><a class="header-anchor" href="#_1-3-1-前向渲染" aria-hidden="true">#</a> 1.3.1 前向渲染</h2><p><em>前向渲染</em>是默认的渲染路径，并支持材质的所有典型功能（如：法线贴图、像素照明、阴影等）。 这种渲染路径有两种不同的代码编写通道可用于我们的着色器中，首先是<strong>基础通道</strong>，其次是<strong>附加通道</strong>。</p><p>在基础通道中，我们可以定义<strong>前向基础</strong><em>光照模式</em>，而在附加通道中，我们可以定义<strong>前向附加</strong><em>光照模式</em>。 两者都是带有光照计算的着色器特征函数。 基础通道可以<em>逐像素</em>处理平行光，若场景内有多个平行光，则会使用最亮的一个。 此外，基础通道可以处理<mark>光照探针、全局照明和环境照明（天光）</mark>。</p><p>额外通道，顾名思义，可以逐像素处理“额外光照”，也可以处理影响物体的阴影，这意味着什么？ 如果我们的场景内有 2 个光，那我们的物体只会受其中之一的影响，然而，如果我们为这种配置定义了额外通道，那它就可以同时受两者的影响。</p><p>我们必须要考虑的一点是，每一个照明通道都会产生一个单独的<em>绘制调用</em>。 <strong>绘制调用</strong>是在我们想要在电脑屏幕上绘制一个元素是，由 GPU 中产生的<mark>调用图形</mark>。 这些调用需要大量的计算，因此需要让它们保持在最低限度，尤其是在我们手头的项目是基于移动端的。</p><p>要理解这个概念，假设我们的场景内有 4 个球体和 1 个平行光。每个球体都会对 GPU 产生一个调用，这意味着他们每一个都会生成一个独立的<em>绘制调用</em>。</p><p>同样的，平行光会影响场景中找到的所有球体，因此，它会为每一个球体产生一个额外的<em>绘制调用</em>，这主要是因为着色器中包含了第二个通道，来计算阴影投射，因此，4 个球体加 1 个平行光会产生 8 次绘制调用。</p><figure><img src="'+P+'" alt="图 1.3.1a 上图中，我们可以看到有光源时绘制调用数量的提高。" tabindex="0" loading="lazy"><figcaption>图 1.3.1a 上图中，我们可以看到有光源时绘制调用数量的提高。</figcaption></figure><div class="hint-container danger"><p class="hint-container-title">为什么是 5 和 14？</p><p>我并不知道为什么绘制调用会是 5 和 14。也不知道为什么 SetPass 会是 2 和 5。作者在此处未作详细说明，译者在写下这段文字时也不甚了解。未来若对绘制调用有了更深的理解，译者会回到此处进行解释。</p><p>现在，读者只需要理解，SetPass意味着“切换材质”，由于增加光照后，增加了与光照计算相关的 Pass，因而 SetPass 增加了，同时，每次渲染一个 Pass 都是一次绘制调用，因而 Draw Calls 也变多了。</p></div><p>确定了基本通道之后，如果我们在着色器中加了一个新的通道，我们就需要为每一个物体增加一次绘制调用，图形负载也会因此显著增加。</p><p>有许多方法可以优化这个过程，我们会在之后进行讨论。现在，我们将继续介绍渲染路径的概念。</p><h2 id="_1-3-2-延迟渲染" tabindex="-1"><a class="header-anchor" href="#_1-3-2-延迟渲染" aria-hidden="true">#</a> 1.3.2 延迟渲染</h2><p>这条渲染路径会确保我们的场景内的每个光源都只有一次光照通道计算，并且这些计算只发生在受到这些光源影响的像素上，而这些都是通过分离几何合光照来实现的。 这是一个优势，因为我们可以放置大量影响不同物体的光源，从而提高最终渲染的保真度，却只是名义上地提高了 GPU 在每个像素的计算量。</p><p>尽管延迟着色在多光源计算上要优于前向渲染，但也带来一些硬件兼容性限制和问题。</p><h2 id="_1-4-我该使用什么渲染引擎" tabindex="-1"><a class="header-anchor" href="#_1-4-我该使用什么渲染引擎" aria-hidden="true">#</a> 1.4 我该使用什么渲染引擎？</h2><p>这在今天是一个普遍而反复出现的问题。</p><p>过去只有内置 RP，因此开始一个 2D 或者 3D 的项目都非常简单。 然而如今，我们必须根据需求来开启我们的电子游戏项目，因此我们可能会想，我要怎么知道我的项目需要哪一种？ 为了回答这个问题，我们得考虑以下几个因素：</p><ol><li>如果我们想要开发一款 PC 游戏，我们可以选择 3 个可用的 Unity 渲染管线中的任何一个，因为通常来说，PC 的计算性能要远好于移动设备，甚至游戏主机。 其次，如果我们的游戏目标平台是 PC，我们是否需要它在画面上达到中高清的水平？ 如果我们的游戏需要达到高清晰度，我们可以使用 HPRP 或者内置 RP。</li><li>如果我们的游戏需要达到中等清晰度，我们可以使用 URP 或者跟前一种情况一样使用内置 RP 也可以。 那么，为什么两种情况都可以选择内置 RP 呢？</li></ol><p>不像前者，这种渲染管线更加灵活，因此，也更有技巧性，也没有预优化。 HDRP 已经进行了预优化来生成高端图形，而 URP 则经过了预优化来生成中等图形。</p><p>另一个选择渲染管线的重要因素在于着色器。 通常，在 HDRP 和 URP，着色器是通过 <strong>Shader Graph</strong> 创建的，这是一个带有图形界面的包，让我们可以通过节点来创建着色器，但这也是一把双刃剑。 一方面，我们可以通过节点可视化地创建着色器，而不需要编写 HLSL 代码；而另一方面，如果我们把 Unity 更新到新的发行版（比如从 2019 到 2020），由于 Shader Graph 的版本和更新独立于 Unity 的版本，因此我们的着色器很可能会停止编译。</p><p>在 Unity 中创建着色器最好的方法是通过 HLSL 语言，因为这种方法可以保证我们的程序在不同的渲染管线中编译，并且不论 Unity 如何更新，我们都可以正常工作。 在本章之后的部分，我们会在 HLSL 程序的结构中详细解释。</p><h2 id="_1-5-矩阵和坐标系统" tabindex="-1"><a class="header-anchor" href="#_1-5-矩阵和坐标系统" aria-hidden="true">#</a> 1.5 矩阵和坐标系统</h2><p><strong>矩阵</strong>是我们在创建着色器的过程中经常见到的一个概念。、 矩阵是遵循某种算术规则的数字元素列表，经常用于计算机图形。</p><p>矩阵在 Unity 中代表空间变换，我们可以看到：</p><ul><li><strong>UNITY_MATRIX_MVP</strong></li><li><strong>UNITY_MATRIX_MV</strong></li><li><strong>UNITY_MATRIX_V</strong></li><li><strong>UNITY_MATRIX_P</strong></li><li><strong>UNITY_MATRIX_VP</strong></li><li><strong>UNITY_MATRIX_T_MV</strong></li><li><strong>UNITY_MATRIX_IT_MV</strong></li><li><strong>unity_ObjectToWorld</strong></li><li><strong>unity_WorldToObject</strong></li></ul>',80),S=s("p",null,[a("这些都对应一个 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"×"),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4 \\times 4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])]),a(" 矩阵，即，每一个都有 4 行 4 列的数据，他们的概念表示如下：")],-1),X=s("blockquote",null,[s("p",null,[a("UNITY_MATRIX = "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{fence:"true"},"["),s("mtable",{rowspacing:"0.16em",columnalign:"center center center center",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",{mathvariant:"bold"},"x"),s("mi",{mathvariant:"bold"},"x")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"y"),s("mi",null,"x")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"z"),s("mi",null,"x")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"t"),s("mi",null,"x")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"y")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",{mathvariant:"bold"},"y"),s("mi",{mathvariant:"bold"},"y")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"z"),s("mi",null,"y")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"t"),s("mi",null,"y")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"z")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"y"),s("mi",null,"z")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",{mathvariant:"bold"},"z"),s("mi",{mathvariant:"bold"},"z")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"t"),s("mi",null,"z")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"x"),s("mi",null,"t")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"y"),s("mi",null,"t")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",null,"z"),s("mi",null,"t")])])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("msub",null,[s("mi",{mathvariant:"bold"},"t"),s("mi",{mathvariant:"bold"},"w")])])])])]),s("mo",{fence:"true"},"]")]),s("annotation",{encoding:"application/x-tex"},"\\begin{bmatrix} \\bold{x_x} & y_x & z_x & t_x\\\\ x_y & \\bold{y_y} & z_y & t_y\\\\ x_z & y_z & \\bold{z_z} & t_z\\\\ x_t & y_t & z_t & \\bold{t_w} \\end{bmatrix}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"4.8em","vertical-align":"-2.15em"}}),s("span",{class:"minner"},[s("span",{class:"mopen"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.65em"}},[s("span",{class:"pstrut",style:{height:"6.8em"}}),s("span",{style:{width:"0.667em",height:"4.800em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"4.800em",viewBox:"0 0 667 4800"},[s("path",{d:`M403 1759 V84 H666 V0 H319 V1759 v1200 v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v1200 v1759 h84z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1611em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathbf mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-1.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2806em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"t")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf",style:{"margin-right":"0.01597em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1611em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.016em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathbf mtight",style:{"margin-right":"0.01597em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-1.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2806em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.0359em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"t")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1611em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathbf mtight"},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-1.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.04398em"}},"z"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2806em"}},[s("span",{style:{top:"-2.55em","margin-left":"-0.044em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"t")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"x")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-3.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03588em"}},"y")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])])])]),s("span",{style:{top:"-2.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1514em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.04398em"}},"z")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])]),s("span",{style:{top:"-1.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathbf"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1611em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathbf mtight",style:{"margin-right":"0.01597em"}},"w")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])])])]),s("span",{class:"mclose"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.65em"}},[s("span",{style:{top:"-4.65em"}},[s("span",{class:"pstrut",style:{height:"6.8em"}}),s("span",{style:{width:"0.667em",height:"4.800em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"0.667em",height:"4.800em",viewBox:"0 0 667 4800"},[s("path",{d:`M347 1759 V0 H0 V84 H263 V1759 v1200 v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v1200 v1759 h84z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"2.15em"}},[s("span")])])])])])])])])])])],-1),Y=s("em",null,"变换",-1),D=s("em",null,"形状",-1),O=s("em",null,"物体空间",-1),C=t('<p>每个顶点在物体空间中的最终值乘上<em>模型矩阵</em>（<strong>UNITY_MATRIX_M</strong>），通过这个矩阵，我们可以修改物体顶点的变换、旋转和缩放。 每次我们旋转、改变位置或者缩放物体，都会更新这个<em>模型矩阵</em>，但这个过程是如何发生的？</p><p>为了便于理解，假设我们的场景中有一个立方体，我们想要通过<em>模型矩阵</em>变换它的值。 我们首先要获取立方体的一个顶点相对其中心的位置 XYZW [0.5f, -0.5f, -0.5f, 1]。</p><p>值得一提的是，例子中的通道“<strong>W</strong>”对应于“齐次”坐标系统，他让我们可以统一处理向量和点。 在矩阵变换中，W 坐标可以是 0 或 1。 W 为 1 时（例如 x, y, z, 1），他代表空间中的一个点，而为 0 时（例如 x, y, z, 0）他代表空间中的一个方向。</p><p>在本书的后续内容中，我们会在向量与矩阵相乘时谈到这个系统，反之亦然。</p><figure><img src="'+k+'" alt="图 1.5a 单位矩阵时矩阵的默认值" tabindex="0" loading="lazy"><figcaption>图 1.5a 单位矩阵时矩阵的默认值</figcaption></figure>',5),E=s("p",null,[a("关于矩阵乘法，需要考虑的一个问题是，左矩阵的列数需要与右矩阵的行数相等。 我们已经知道，"),s("em",null,"模型矩阵"),a("的维度是四行四列（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"×"),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"4\\times 4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])]),a("）的，而顶点位置的维度是四行一列（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"×"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"4\\times 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a("）的。 因为"),s("em",null,"模型矩阵"),a("的列数和顶点位置的行数相等，所以他们可以相乘，而结果是一个新的四行一列（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"4"),s("mo",null,"×"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"4\\times 1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"×"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),a("）矩阵，代表着新的顶点位置。 这个过程发生在我们物体上的所有顶点上，而这个过程发生在着色器的"),s("strong",null,"顶点着色器阶段"),a("。")],-1),G=t('<p>我们已经知道了，<em>物体空间</em>代表了物体顶点相对于物体中心的位置，那<em>世界空间</em>、<em>观察空间</em>和<em>裁剪空间</em>又是什么？ 概念是相同的。</p><p><em>世界空间</em>代表顶点相对世界中心的位置。 场景中网格中的点 XYZW [0, 0, 0, 1] 和物体中顶点的位置之间的距离。 如果我们想将空间坐标由<em>物体空间</em>转换至<em>世界空间</em>，我们可以使用内置着色器变量 <code>unity_ObjectToWorld</code>。</p><figure><img src="'+V+'" alt="图 1.5b" tabindex="0" loading="lazy"><figcaption>图 1.5b</figcaption></figure><p><em>观察空间</em>代表物体顶点相对于相机视角的位置。 如果我们想要将空间坐标由<em>世界空间</em>转换至<em>观察空间</em>，我们可以使用矩阵 <code>UNITY_MATRIX_V</code>。</p><figure><img src="'+T+'" alt="图 1.5c" tabindex="0" loading="lazy"><figcaption>图 1.5c</figcaption></figure><p>最后，<em>裁剪空间</em>，也叫<em>投影空间</em>，代表物体顶点相对于摄像机视锥体的位置，因此他会受到相机的<em>近裁切平面</em>、<em>远裁切平面</em>和<em>视场</em>（<em>FOV</em>）的影响。 同样，如果我们想将空间坐标由<em>观察空间</em>转换至<em>裁剪空间</em>，我们可以使用矩阵 <code>UNITY_MATRIX_P</code>。</p><figure><img src="'+I+'" alt="图 1.5d" tabindex="0" loading="lazy"><figcaption>图 1.5d</figcaption></figure><p>我们已经在概念层面上大致讨论了不同的空间坐标，但我们还没有解释变换矩阵代表什么含义。</p><p>例如，内置着色器变量 <em>UNITY_MATRIX_MVP</em> 代表了三种不同矩阵的相乘。 M 代表模型矩阵，V 代表观察矩阵，而 P 代表投影矩阵。 这个矩阵通常用于将物体的顶点从物体空间转换至裁剪空间。 我们的多边形物体存在于“三维”环境中，而将会显示它的电脑屏幕却是“二维”的，因此我们必须把物体从一个空间转换至另一个空间。</p><p>本书的后续部分，我们会在顶点着色器阶段中使用<code>UnityObjectToClipPos</code>函数时，详细回顾这些概念。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><hr class="footnotes-sep">',12),W={class:"footnotes"},j={class:"footnotes-list"},q={id:"footnote1",class:"footnote-item"},F={href:"https://docs.unity.cn/cn/2022.1/ScriptReference/Mesh-tangents.html",target:"_blank",rel:"noopener noreferrer"},Z=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function J(K,Q){const e=n("RouterLink"),m=n("ExternalLinkIcon");return r(),c("div",null,[H,o(" more "),N,B,L,s("p",null,[a("之后在"),l(e,{to:"/posts/the_unity_shader_bible/surface.html#_6-1-%E6%B3%95%E7%BA%BF%E8%B4%B4%E5%9B%BE"},{default:i(()=>[a("第Ⅱ章 6.0.1 节")]),_:1}),a(" 中，我们会详细回顾此属性，包括在物体上的实现法线贴图的副法线。")]),A,S,X,s("p",null,[a("正如我们在关于顶点的 "),l(e,{to:"/game_dev/TA/the_unity_shader_bible/introduction_to_the_shader_programming_language/initial_observations.html#_1-1-1-%E9%A1%B6%E7%82%B9"},{default:i(()=>[a("1.1.1 节")]),_:1}),a("中解释的，一个多边形物体默认有两个节点。 在 Maya 中，这两个节点是"),Y,a("和"),D,a("，并这两者都负责计算顶点在"),O,a("的位置，它定义了顶点相对于物体中心的位置。")]),C,E,G,s("section",W,[s("ol",j,[s("li",q,[s("p",null,[s("a",F,[a("Mesh - Tangents - Unity 脚本 API"),l(m)]),a(),Z])])])])])}const as=p(R,[["render",J],["__file","initial_observations.html.vue"]]);export{as as default};
