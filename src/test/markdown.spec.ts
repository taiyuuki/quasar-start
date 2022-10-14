import MarkdownPage from '../pages/MarkdownPage.md'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('markdown component', () => {
  it('import markdown component', () => {
    const md = mount(MarkdownPage)
    expect(md.html()).toMatchInlineSnapshot(`
      "<div class=\\"markdown-body\\">
        <h3>Markdown Page</h3><pre><code class=\\"language-vue\\"><div class=\\"shiki-container\\"><pre class=\\"shiki shiki-dark\\" style=\\"background-color: rgb(30, 30, 30);\\"><code v-pre=\\"\\"><span class=\\"line\\"><span style=\\"color: rgb(106, 153, 85);\\">&lt;!-- ExampleComponent.vue --&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 128, 128);\\">&lt;</span><span style=\\"color: rgb(86, 156, 214);\\">template</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">  </span><span style=\\"color: rgb(128, 128, 128);\\">&lt;</span><span style=\\"color: rgb(86, 156, 214);\\">div</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">    </span><span style=\\"color: rgb(128, 128, 128);\\">&lt;</span><span style=\\"color: rgb(86, 156, 214);\\">h1</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">      </span><span style=\\"color: rgb(156, 220, 254);\\">text</span><span style=\\"color: rgb(212, 212, 212);\\">=</span><span style=\\"color: rgb(206, 145, 120);\\">\\"2rem center bold\\"</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">      </span><span style=\\"color: rgb(156, 220, 254);\\">m</span><span style=\\"color: rgb(212, 212, 212);\\">=</span><span style=\\"color: rgb(206, 145, 120);\\">\\"10\\"</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">    </span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">      {{ </span><span style=\\"color: rgb(220, 220, 170);\\">$t</span><span style=\\"color: rgb(212, 212, 212);\\">(</span><span style=\\"color: rgb(206, 145, 120);\\">'home.title'</span><span style=\\"color: rgb(212, 212, 212);\\">) }}</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">    </span><span style=\\"color: rgb(128, 128, 128);\\">&lt;/</span><span style=\\"color: rgb(86, 156, 214);\\">h1</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">    </span><span style=\\"color: rgb(128, 128, 128);\\">&lt;</span><span style=\\"color: rgb(78, 201, 176);\\">Features</span><span style=\\"color: rgb(212, 212, 212);\\"> /</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(212, 212, 212);\\">  </span><span style=\\"color: rgb(128, 128, 128);\\">&lt;/</span><span style=\\"color: rgb(86, 156, 214);\\">div</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 128, 128);\\">&lt;/</span><span style=\\"color: rgb(86, 156, 214);\\">template</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 128, 128);\\">&lt;</span><span style=\\"color: rgb(86, 156, 214);\\">script</span><span style=\\"color: rgb(212, 212, 212);\\"> </span><span style=\\"color: rgb(156, 220, 254);\\">setup</span><span style=\\"color: rgb(212, 212, 212);\\"> </span><span style=\\"color: rgb(156, 220, 254);\\">lang</span><span style=\\"color: rgb(212, 212, 212);\\">=</span><span style=\\"color: rgb(206, 145, 120);\\">\\"ts\\"</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(197, 134, 192);\\">import</span><span style=\\"color: rgb(212, 212, 212);\\"> </span><span style=\\"color: rgb(156, 220, 254);\\">Features</span><span style=\\"color: rgb(212, 212, 212);\\"> </span><span style=\\"color: rgb(197, 134, 192);\\">from</span><span style=\\"color: rgb(212, 212, 212);\\"> </span><span style=\\"color: rgb(206, 145, 120);\\">'src/md/Features.md'</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 128, 128);\\">&lt;/</span><span style=\\"color: rgb(86, 156, 214);\\">script</span><span style=\\"color: rgb(128, 128, 128);\\">&gt;</span></span>
      <span class=\\"line\\"></span></code></pre><pre class=\\"shiki shiki-light\\" style=\\"background-color: rgb(255, 255, 255);\\"><code v-pre=\\"\\"><span class=\\"line\\"><span style=\\"color: rgb(0, 128, 0);\\">&lt;!-- ExampleComponent.vue --&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 0, 0);\\">&lt;template&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">  </span><span style=\\"color: rgb(128, 0, 0);\\">&lt;div&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">    </span><span style=\\"color: rgb(128, 0, 0);\\">&lt;h1</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">      </span><span style=\\"color: rgb(255, 0, 0);\\">text</span><span style=\\"color: rgb(0, 0, 0);\\">=</span><span style=\\"color: rgb(0, 0, 255);\\">\\"2rem center bold\\"</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">      </span><span style=\\"color: rgb(255, 0, 0);\\">m</span><span style=\\"color: rgb(0, 0, 0);\\">=</span><span style=\\"color: rgb(0, 0, 255);\\">\\"10\\"</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">    </span><span style=\\"color: rgb(128, 0, 0);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">      {{ </span><span style=\\"color: rgb(121, 94, 38);\\">$t</span><span style=\\"color: rgb(0, 0, 0);\\">(</span><span style=\\"color: rgb(163, 21, 21);\\">'home.title'</span><span style=\\"color: rgb(0, 0, 0);\\">) }}</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">    </span><span style=\\"color: rgb(128, 0, 0);\\">&lt;/h1&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">    </span><span style=\\"color: rgb(128, 0, 0);\\">&lt;</span><span style=\\"color: rgb(38, 127, 153);\\">Features</span><span style=\\"color: rgb(0, 0, 0);\\"> /</span><span style=\\"color: rgb(128, 0, 0);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(0, 0, 0);\\">  </span><span style=\\"color: rgb(128, 0, 0);\\">&lt;/div&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 0, 0);\\">&lt;/template&gt;</span></span>
      <span class=\\"line\\"></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 0, 0);\\">&lt;script</span><span style=\\"color: rgb(0, 0, 0);\\"> </span><span style=\\"color: rgb(255, 0, 0);\\">setup</span><span style=\\"color: rgb(0, 0, 0);\\"> </span><span style=\\"color: rgb(255, 0, 0);\\">lang</span><span style=\\"color: rgb(0, 0, 0);\\">=</span><span style=\\"color: rgb(0, 0, 255);\\">\\"ts\\"</span><span style=\\"color: rgb(128, 0, 0);\\">&gt;</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(175, 0, 219);\\">import</span><span style=\\"color: rgb(0, 0, 0);\\"> </span><span style=\\"color: rgb(0, 16, 128);\\">Features</span><span style=\\"color: rgb(0, 0, 0);\\"> </span><span style=\\"color: rgb(175, 0, 219);\\">from</span><span style=\\"color: rgb(0, 0, 0);\\"> </span><span style=\\"color: rgb(163, 21, 21);\\">'src/md/Features.md'</span></span>
      <span class=\\"line\\"><span style=\\"color: rgb(128, 0, 0);\\">&lt;/script&gt;</span></span>
      <span class=\\"line\\"></span></code></pre>
      </div></code></pre>
      </div>"
    `)
  })
})