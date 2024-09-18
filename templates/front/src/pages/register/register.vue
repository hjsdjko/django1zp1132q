<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20210228/d2b28a9964264d2eaf5ec1e2db1fb1bb.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"60px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"0","alignItems":"flex-start","flexDirection":"row","display":"flex","borderRadius":"10px","flexWrap":"wrap","background":"rgba(0,0,0,.2)","width":"60%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 0 0 80px","color":"#000","textAlign":"left","width":"100%","lineHeight":"44px","fontSize":"36px","textShadow":"none"}'>基于Django框架学习资源推送系统注册</p></div>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xuehao')?'required':''">学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima2">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingming">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingming')?'required':''">姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanye">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('zhuanye')?'required':''">专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="banji">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="youxiang">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='xuesheng'" prop="shouji">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('shouji')?'required':''">手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="gonghao">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('gonghao')?'required':''">工号：</div>
				<el-input v-model="registerForm.gonghao"  placeholder="请输入工号" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima2">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingming">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingbie">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="touxiang">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="zhicheng">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('zhicheng')?'required':''">职称：</div>
				<el-input v-model="registerForm.zhicheng"  placeholder="请输入职称" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="dianhua">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('dianhua')?'required':''">电话：</div>
				<el-input v-model="registerForm.dianhua"  placeholder="请输入电话" />
			</el-form-item>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"15px 0 0","height":"auto"}' v-if="tableName=='jiaoshi'" prop="youxiang">
				<div v-if="true" :style='{"width":"80px","lineHeight":"44px","fontSize":"14px","color":"#000","textAlign":"center"}' :class="changeRules('youxiang')?'required':''">邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px 0 5px","color":"#fff","display":"block","outline":"none","borderRadius":"8px","background":"#AD8936","width":"200px","fontSize":"24px","height":"60px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px 40px 5px","color":"#AD8936","textAlign":"left","display":"block","outline":"none","borderRadius":"0","background":"transparent","width":"80%","fontSize":"15px","height":"60px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"#AD8936","display":"inline-block","lineHeight":"1","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            xueshengxingbieOptions: [],
            jiaoshixingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='xuesheng'){
				this.registerForm = {
					xuehao: '',
					mima: '',
					mima2: '',
					xingming: '',
					xingbie: '',
					touxiang: '',
					zhuanye: '',
					banji: '',
					youxiang: '',
					shouji: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.registerForm = {
					gonghao: '',
					mima: '',
					mima2: '',
					xingming: '',
					xingbie: '',
					touxiang: '',
					zhicheng: '',
					dianhua: '',
					youxiang: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.gonghao = [{ required: true, message: '请输入工号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('xuesheng' == this.tableName) {
			this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.xueshengxingbieOptions = "男,女".split(',');
		  if ('xuesheng' == this.tableName) {
			this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.shouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.gonghao = [{ required: true, message: '请输入工号', trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
			this.jiaoshixingbieOptions = "男,女".split(',');
		  if ('jiaoshi' == this.tableName) {
			this.rules.dianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('jiaoshi' == this.tableName) {
			this.rules.youxiang = [{ required: true, validator: this.$validate.isEmail, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiaoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.xuehao) && `xuesheng` == this.tableName){
					this.$message.error(`学号不能为空`);
					return
				}
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xuesheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
					if(`xuesheng` == this.tableName && this.registerForm.shouji &&(!this.$validate.isMobile2(this.registerForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
				if((!this.registerForm.gonghao) && `jiaoshi` == this.tableName){
					this.$message.error(`工号不能为空`);
					return
				}
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `jiaoshi` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
					if(`jiaoshi` == this.tableName && this.registerForm.dianhua &&(!this.$validate.isMobile2(this.registerForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
					if(`jiaoshi` == this.tableName && this.registerForm.youxiang &&(!this.$validate.isEmail2(this.registerForm.youxiang))){
						this.$message.error(`邮箱应输入邮件格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20210228/d2b28a9964264d2eaf5ec1e2db1fb1bb.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 2px solid #C7C7C7;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						background: #fff;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 2px solid #C7C7C7;
						border-radius: 10px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #C7C7C7;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #C7C7C7;
						border-radius: 10px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px solid #C7C7C7;
		  		  cursor: pointer;
		  		  border-radius: 10px;
		  		  color: #C7C7C7;
		  		  background: #fff;
		  		  width: 100px;
		  		  font-size: 24px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #C7C7C7;
		  		  cursor: pointer;
		  		  border-radius: 10px;
		  		  color: #C7C7C7;
		  		  background: #fff;
		  		  width: 100px;
		  		  font-size: 24px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #C7C7C7;
		  		  cursor: pointer;
		  		  border-radius: 10px;
		  		  color: #C7C7C7;
		  		  background: #fff;
		  		  width: 100px;
		  		  font-size: 24px;
		  		  line-height: 50px;
		  		  text-align: center;
		  		  height: 50px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: -10px;
				position: absolute;
				content: "*";
			}
</style>
