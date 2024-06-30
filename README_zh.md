<p align="center"><img src="./urlmskr.svg"></p>

<p align="center"><a href="./README.md">English</a> — <a href="./README_zh.md">中文</a> — <a href="./README_bn.md">বাংলা</a> — <a href="./README_bn.md">عربي</a> — <a href="./README_es.md">español</a></p>

> [!IMPORTANT]  
> 这只是一个粗略的翻译，可能并不准确。

# ❓ 关于

urlmskr 可让你屏蔽链接并发送编码信息，方法是将链接更改为不易被读取但仍可重定向到原始链接的链接。它完全在前端运行，不需要后台服务器，也不存储数据。你可以将它托管到任何地方。在 [Patreon!](https://www.patreon.com/axorax) 上支持该项目 <3

# 🤔 为什么？

使用 urlmskr 这样的工具可以发送链接而不显示目标网站。不过，这可能会导致接收到不想要的网站链接。要显示目的地，只需在 URL 结尾添加 `+reveal`。例如：`https://axorax.github.io/urlmskr/hello69+reveal`。

# 💻 与您的项目相结合

urlmskr 的根目录中包含各种编程语言的库，以相应语言的扩展名 `lib` 命名。你可以将代码粘贴或导入到你的项目中。下面介绍如何使用 JavaScript 库：

```html
<!doctype html>
<html lang="en">
  <head>
    <title>示例</title>
  </head>
  <body>
    <script src="https://axorax.github.io/urlmskr/lib.js"></script>
    <script>
      document.write(urlmskr.mask("https://axorax.github.io")); // 屏蔽 URL
      document.write("<br>"); // 添加空行
      document.write(urlmskr.mask("Hello", "text")); // 屏蔽文本
    </script>
  </body>
</html>
```

---

<p align="center"><a href="https://www.patreon.com/axorax">在 Patreon 上支持我</a> — <a href="https://github.com/axorax/socials">查看我的社交网站</a></p>
