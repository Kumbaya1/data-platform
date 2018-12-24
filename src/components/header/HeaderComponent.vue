<template>
    <div class="header">
      <div class="header-main">
        <h1 class="header-main-brand">
            <img src="../../assets/images/logo.png">  多元数据管理平台
        </h1>
        <ul class="header-main-nav">
            <li class="nav-item"><Avatar icon="ios-person" size="large" /></li>
            <li class="nav-item">
                <Dropdown style="margin-left: 20px">
                    <a href="javascript:void(0)">
                        admin
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>个人信息</DropdownItem>
                        <DropdownItem>切换用户</DropdownItem>
                        <DropdownItem>退出登录</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
    $headerHeight: 55px;
    .header{
        width: 100%;
        height: $headerHeight;
        background: #393D49;
        border-bottom: 5px solid #5FB878;
        box-sizing: content-box;
        &-main{
            margin: 0 15px;
            display: flex;
            &-brand{
                flex: 1;
                color: #fff;
                line-height: 50px;
                height: $headerHeight;
                font-size: 28px;
                font-family:  'microsoft yahei',"\5B8B\4F53",sans-serif;
                >img{
                    height: 50px;
                    vertical-align:middle;
                    margin-right: 10px;
                }
            }
            &-nav{
                flex: 1;
                text-align: right;
                line-height: 40px;
                color: #fff;
                height: 40px;
                margin-top: 8px;
                .nav-item{
                    display: inline-block;
                    text-align: center;
                }
                
            }
           
        }
    }
</style>