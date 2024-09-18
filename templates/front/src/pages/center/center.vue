<template>
<div class="center-preview" :style='{"padding":"40px 0 0","margin":"10px auto","flexWrap":"wrap","background":"transparent","display":"flex","width":"68%","position":"relative"}'>
	<div class="title" :style='{"padding":"5px 0","margin":"10px 0 0","color":"#fff","textAlign":"center","background":"#000","width":"100%","fontSize":"20px","lineHeight":"2"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"20px 40px 60px","boxShadow":"none","margin":"0 0 20px","borderRadius":"0","flexWrap":"wrap","background":"#ffffff","flexDirection":"column","display":"flex","width":"100%","position":"relative","height":"180px"}'>
		<div :style='{"borderColor":"#efefef","color":"#333","borderWidth":"0 0 1px 0","display":"none","width":"100%","lineHeight":"44px","fontSize":"15px","borderStyle":"solid","height":"44px"}'>个人信息</div>
		<div :style='{"width":"auto","borderColor":"#efefef","fontSize":0,"borderStyle":"solid","borderWidth":"0","height":"100%"}' v-if="userTableName=='xuesheng'">
			<el-image :style='{"margin":"0 auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"5px","borderWidth":"0 0 1px 0","display":"block","width":"100px","borderStyle":"solid","height":"100px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"width":"auto","borderColor":"#efefef","fontSize":0,"borderStyle":"solid","borderWidth":"0","height":"100%"}' v-if="userTableName=='jiaoshi'">
			<el-image :style='{"margin":"0 auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"5px","borderWidth":"0 0 1px 0","display":"block","width":"100px","borderStyle":"solid","height":"100px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","alignItems":"flex-start","borderWidth":"0","display":"flex","width":"auto","lineHeight":"1","borderStyle":"solid","height":"50%"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>学号</div>
			<div :style='{"fontSize":"18px","color":"#000","textAlign":"left","flex":1,"fontWeight":"bold"}'>{{sessionForm.xuehao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","alignItems":"flex-start","borderWidth":"0","display":"flex","width":"100%","lineHeight":"1","borderStyle":"solid","height":"50%"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#9e9e9e","padding":"0 6px 0 0","fontSize":"14px"}'>姓名</div>
			<div :style='{"fontSize":"14px","color":"#000","textAlign":"left","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"0","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>性别</div>
			<div :style='{"color":"#333","width":"auto","fontSize":"14px"}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"calc(100% / 3)","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>专业</div>
			<div :style='{"color":"#333","textAlign":"left","fontSize":"14px"}'>{{sessionForm.zhuanye}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"calc(200% / 3)","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>班级</div>
			<div :style='{"color":"#333","textAlign":"left","fontSize":"14px"}'>{{sessionForm.banji}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"none","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>邮箱</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.youxiang}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","alignItems":"flex-start","borderWidth":"0","display":"flex","width":"auto","lineHeight":"1","borderStyle":"solid","height":"50%"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>工号</div>
			<div :style='{"fontSize":"18px","color":"#000","textAlign":"left","flex":1,"fontWeight":"bold"}'>{{sessionForm.gonghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","alignItems":"flex-start","borderWidth":"0","display":"flex","width":"100%","lineHeight":"1","borderStyle":"solid","height":"50%"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"padding":"0 5px","fontSize":"14px","color":"#333","display":"none"}'></span>
			<div :style='{"color":"#9e9e9e","padding":"0 6px 0 0","fontSize":"14px"}'>教师姓名</div>
			<div :style='{"fontSize":"14px","color":"#000","textAlign":"left","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"0","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>性别</div>
			<div :style='{"color":"#333","width":"auto","fontSize":"14px"}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"calc(100% / 3)","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>职称</div>
			<div :style='{"color":"#333","textAlign":"left","fontSize":"14px"}'>{{sessionForm.zhicheng}}</div>
		</div>
		<div :style='{"padding":"0 0","borderColor":"#efefef","alignItems":"center","bottom":"6px","display":"flex","justifyContent":"center","left":"calc(200% / 3)","borderWidth":"0","width":"calc(100% / 3)","lineHeight":"40px","position":"absolute","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-baohuhaoma" :style='{"padding":"0 5px","margin":"0 16px 0 0","color":"#fff","borderRadius":"50%","textAlign":"center","background":"#000","width":"30px","fontSize":"14px","lineHeight":"30px","height":"30px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px","display":"none"}'>电话</div>
			<div :style='{"color":"#333","textAlign":"left","fontSize":"14px"}'>{{sessionForm.dianhua}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"none","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>邮箱</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.youxiang}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"border":"1px solid #ddd","width":"100%","flexWrap":"wrap","background":"transparent","display":"flex","height":"auto"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="80px">
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="学号" prop="xuehao">
            <el-input v-model="sessionForm.xuehao" placeholder="学号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="xueshengtouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="专业" prop="zhuanye">
            <el-input v-model="sessionForm.zhuanye" placeholder="专业" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="班级" prop="banji">
            <el-input v-model="sessionForm.banji" placeholder="班级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="邮箱" prop="youxiang">
            <el-input v-model="sessionForm.youxiang" placeholder="邮箱" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='xuesheng'" label="手机" prop="shouji">
            <el-input v-model="sessionForm.shouji" placeholder="手机" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="工号" prop="gonghao">
            <el-input v-model="sessionForm.gonghao" placeholder="工号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="教师姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="教师姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="jiaoshitouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="职称" prop="zhicheng">
            <el-input v-model="sessionForm.zhicheng" placeholder="职称" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="电话" prop="dianhua">
            <el-input v-model="sessionForm.dianhua" placeholder="电话" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' v-if="userTableName=='jiaoshi'" label="邮箱" prop="youxiang">
            <el-input v-model="sessionForm.youxiang" placeholder="邮箱" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"6px 10px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#000","width":"auto","fontSize":"16px","height":"auto"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"0px solid rgba(64, 158, 255, 1)","cursor":"pointer","padding":"6px 16px","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#9E9E9E","width":"auto","fontSize":"16px","height":"auto"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="80px">
			<el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"auto","padding":"10px","margin":"0 0 10px","background":"transparent","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"6px 10px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#000","width":"auto","fontSize":"16px","height":"auto"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xuehao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuanye', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'banji', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'youxiang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'shouji', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'gonghao', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'zhicheng', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'dianhua', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'youxiang', null);
		}

		if ('xuesheng' == this.userTableName&&this.rules['xuehao']){
			this.rules['xuehao'].push({ required: true, message: '请输入学号', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['xuehao']) {
			this.$set(this.rules, 'xuehao', [{ required: true, message: '请输入学号', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'youxiang', [{ required: false, validator: this.$validate.isEmail, trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'shouji', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['gonghao']){
			this.rules['gonghao'].push({ required: true, message: '请输入工号', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['gonghao']) {
			this.$set(this.rules, 'gonghao', [{ required: true, message: '请输入工号', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('jiaoshi' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.rules, 'dianhua', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.rules, 'youxiang', [{ required: false, validator: this.$validate.isEmail, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('xuesheng' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
        if ('jiaoshi' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`xuesheng` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`jiaoshi` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      xueshengtouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      jiaoshitouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.passwordForm.newpassword == this.passwordForm.password) {
						this.$message.error("新密码与原密码相同！");
						return;
					}
					if (this.userTableName == 'xuesheng') {
					}
					if (this.userTableName == 'jiaoshi') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 10px 0;
	margin: 0;
	background: transparent;
	width: 100%;
	border-color: #eee;
	border-width: 0;
	position: relative;
	border-style: solid;
	height: auto;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	border: 1px solid transparent;
  	padding: 0 10px;
  	margin: 0 10px 10px;
  	color: #9E9E9E;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	float: left;
  	border-radius: 30px;
  	background: transparent;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	border: 1px solid #AD8936;
  	padding: 0 10px;
  	margin: 0 10px;
  	color: #AD8936;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	border-radius: 30px;
  	background: transparent;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	border: 1px solid #AD8936;
  	padding: 0 10px;
  	margin: 0 10px 10px;
  	color: #AD8936;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	float: left;
  	border-radius: 30px;
  	background: transparent;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 10px;
  	background: transparent;
  	width: 100%;
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #000;
  	font-weight: 500;
  	width: 80px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 80px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	border: 0;
  	border-radius: 0;
  	padding: 0 12px;
  	box-shadow: none;
  	outline: none;
  	color: #000;
  	background: #fff;
  	width: 300px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	border: 0;
  	border-radius: 0;
  	padding: 0 12px;
  	box-shadow: none;
  	outline: none;
  	color: #000;
  	background: #fff;
  	width: 300px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	border: 0;
  	border-radius: 0;
  	padding: 0 10px 0 30px;
  	box-shadow: none;
  	outline: none;
  	color: #000;
  	background: #fff;
  	width: 300px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	border: 1px dashed #000;
  	cursor: pointer;
  	border-radius: 6px;
  	color: #000;
  	background: #fff;
  	width: 120px;
  	font-size: 32px;
  	line-height: 40px;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border: 0;
  	border-radius: 0;
  	padding: 0 12px;
  	box-shadow: none;
  	outline: none;
  	color: #000;
  	background: #fff;
  	display: inline-block;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
</style>
