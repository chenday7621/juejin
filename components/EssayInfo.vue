<template>
<div>
  <article class="article_main">
                <h1 class="article_title">{{}}</h1>
                <div class="author_info">
                    <a href=""><img src="" alt=""></a>
                    <div>
                        <div class="author_name">
                            <a href="">昵称</a>
                        </div>
                        <div class="article_data">
                            <time>时间</time>
                            <span>阅读量</span>
                        </div>
                    </div>
                </div>
                <div class="article_content"></div>
                <div></div>
            </article>
            <div class="recommend">
                <div class="article_tag">
                    <div class="classification">
                        <span>分类:</span>
                        <a href="">{{}}</a>
                    </div>
                    <div class="article_label">
                        <span>标签:</span>
                        <a href="">{{}}</a>
                    </div>
                </div>
                <div class="column-container"></div>
            </div>
            <div class="correlation"></div>
            <div class="comment-section">
                <div class="comment-t">评论</div>
                <div class="comment-input">
                    <img src="" alt="">
                    <input type="text" placeholder="输入评论（Enter换行，Ctrl + Enter发送）">
                </div>
                <div class="comment-hot">热门评论<span><svg t="1677056994057" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3578" width="16" height="16"><path d="M760.591059 332.739765L681.682824 409.6s0-307.2-263.107765-409.539765c0 0-26.262588 281.6-157.816471 383.939765-131.553882 102.460235-394.721882 409.6 131.433412 639.939765 0 0-263.168-281.6 78.908235-486.27953 0 0-26.322824 102.339765 105.231059 204.8 131.614118 102.4 0 281.6 0 281.6s631.506824-153.6 184.32-691.260235z" fill="#EA322B" p-id="3579"></path></svg></span></div>
                <div class="comment-value">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
</div>
</template>

<script>
export default {
  name: 'EssayInfo'
}
</script>

<style scoped>
        .article_main {
            width: 820px;
            max-width: 100%;
            background-color: #fff;
            color: #000;
            padding: 32.04px;
            /* min-height: 1000px; */
        }

        
        .recommend {
            width: 100%;
            padding: 32.04px;
            background-color: #fff;
        }
        
        .classification a {
            color: #000;
            background-color: #f2f3f5;
        }
        .article_label a {
            background-color: #eaf2ff;
            color: #1e80ff;
        }
        .comment-section {
            width: 100%;
            padding: 32.04px;
            background-color: #fff;
        }
        
        .comment-input input {
            width: 700px;
            height: 64px;
            border-radius: 4px;
            background-color: #f2f3f5;
            border: 1px solid #f2f3f5;
        }
        
</style>
