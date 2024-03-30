"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[665],{8665:(N,_,m)=>{m.r(_),m.d(_,{SettingModule:()=>b});var p=m(6814),u=m(7163),e=m(4769);let h=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-updatepassword"]],decls:2,vars:0,template:function(r,s){1&r&&(e.TgZ(0,"p"),e._uU(1,"updatepassword works!"),e.qZA())}})}return t})();var n=m(95),g=m(5395),c=m(2425);function w(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"email is Required"),e.qZA())}function v(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"email Invaled"),e.qZA())}function T(t,l){if(1&t&&(e.TgZ(0,"div",8),e.YNc(1,w,2,0,"p",9),e.YNc(2,v,2,0,"p",9),e.qZA()),2&t){const o=e.oxw();let r,s;e.xp6(1),e.Q6J("ngIf",null==(r=o.forgetform.get("email"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(s=o.forgetform.get("email"))?null:s.getError("email"))}}function Z(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"resetCode is Required"),e.qZA())}function x(t,l){if(1&t&&(e.TgZ(0,"div",8),e.YNc(1,Z,2,0,"p",9),e.qZA()),2&t){const o=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=o.resetCodeform.get("resetCode"))?null:r.getError("required"))}}function S(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"email is Required"),e.qZA())}function A(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"email Invaled"),e.qZA())}function J(t,l){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,S,2,0,"p",11),e.YNc(2,A,2,0,"p",11),e.qZA()),2&t){const o=e.oxw();let r,s;e.xp6(1),e.Q6J("ngIf",null==(r=o.resetpasswordform.get("email"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(s=o.resetpasswordform.get("email"))?null:s.getError("email"))}}function I(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"newPassword is Required"),e.qZA())}function Y(t,l){1&t&&(e.TgZ(0,"p"),e._uU(1,"password must start with uppercase then from 6 to 20"),e.qZA())}function q(t,l){if(1&t&&(e.TgZ(0,"div",10),e.YNc(1,I,2,0,"p",11),e.YNc(2,Y,2,0,"p",11),e.qZA()),2&t){const o=e.oxw();let r,s;e.xp6(1),e.Q6J("ngIf",null==(r=o.resetpasswordform.get("newPassword"))?null:r.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(s=o.resetpasswordform.get("newPassword"))?null:s.getError("pattern"))}}const F=[{path:"",redirectTo:"update",pathMatch:"full"},{path:"update",component:h},{path:"forgot",component:(()=>{class t{constructor(o,r,s,i){this._FormBuilder=o,this._AuthService=r,this._ToastrService=s,this._Router=i,this.forgetform=this._FormBuilder.group({email:["",[n.kI.required,n.kI.email]]})}handelform(){console.log(this.forgetform.value),this._AuthService.forgetpassword(this.forgetform.value).subscribe({next:o=>{this._ToastrService.success(`${o.message}`,`${o.statusMsg}`),this._Router.navigate(["setting/verify"])},error:o=>{console.log(o),this._ToastrService.warning(`${o.error.message}`,`${o.error.statusMsg}`)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(g.e),e.Y36(c._W),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgotpassword"]],decls:10,vars:2,consts:[[1,"bg-main-light","mx-auto","my-3","w-75"],[3,"formGroup","ngSubmit"],[1,"p-3"],[1,"h3","text-main"],["type","email","id","email","placeholder","Email","formControlName","email",1,"form-control"],["inputEmail",""],["class","alert alert-danger",4,"ngIf"],[1,"btn-main","mt-3"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(r,s){if(1&r&&(e.TgZ(0,"section",0)(1,"form",1),e.NdJ("ngSubmit",function(){return s.handelform()}),e.TgZ(2,"div",2)(3,"h2",3),e._uU(4,"please enter your email"),e.qZA(),e._UZ(5,"input",4,5),e.YNc(7,T,3,2,"div",6),e.TgZ(8,"button",7),e._uU(9,"Send Verification Code"),e.qZA()()()()),2&r){const i=e.MAs(6);let a;e.xp6(1),e.Q6J("formGroup",s.forgetform),e.xp6(6),e.Q6J("ngIf",(null==(a=s.forgetform.get("email"))?null:a.errors)&&((null==(a=s.forgetform.get("email"))?null:a.touched)||i.value.length>0))}},dependencies:[p.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return t})()},{path:"verify",component:(()=>{class t{constructor(o,r,s,i){this._FormBuilder=o,this._AuthService=r,this._ToastrService=s,this._Router=i,this.resetCodeform=this._FormBuilder.group({resetCode:["",[n.kI.required]]})}handelform(){this._AuthService.verifyRestCode(this.resetCodeform.value).subscribe({next:o=>{console.log(o),this._ToastrService.success(`${o.status}`,`${o.status}`),this._Router.navigate(["setting/resetpassword"])},error:o=>{console.log(o),this._ToastrService.warning(`${o.error.status}`,`${o.error.status}`)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(g.e),e.Y36(c._W),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-verifycode"]],decls:10,vars:2,consts:[[1,"bg-main-light","mx-auto","my-3","w-75"],[3,"formGroup","ngSubmit"],[1,"p-3"],[1,"h3","text-main"],["type","text","id","resetCode","placeholder","resetCode","formControlName","resetCode",1,"form-control"],["inputresetCode",""],["class","alert alert-danger",4,"ngIf"],[1,"btn-main","mt-3"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(r,s){if(1&r&&(e.TgZ(0,"section",0)(1,"form",1),e.NdJ("ngSubmit",function(){return s.handelform()}),e.TgZ(2,"div",2)(3,"h2",3),e._uU(4,"reset your account password"),e.qZA(),e._UZ(5,"input",4,5),e.YNc(7,x,2,1,"div",6),e.TgZ(8,"button",7),e._uU(9,"Verify"),e.qZA()()()()),2&r){const i=e.MAs(6);let a;e.xp6(1),e.Q6J("formGroup",s.resetCodeform),e.xp6(6),e.Q6J("ngIf",(null==(a=s.resetCodeform.get("resetCode"))?null:a.errors)&&((null==(a=s.resetCodeform.get("resetCode"))?null:a.touched)||i.value.length>0))}},dependencies:[p.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return t})()},{path:"resetpassword",component:(()=>{class t{constructor(o,r,s,i){this._FormBuilder=o,this._AuthService=r,this._ToastrService=s,this._Router=i,this.resetpasswordform=this._FormBuilder.group({email:["",[n.kI.required,n.kI.email]],newPassword:["",[n.kI.required,n.kI.pattern(/^[A-Z][a-z0-9]{6,20}$/)]]})}handelform(){this._AuthService.resetPassword(this.resetpasswordform.value).subscribe({next:o=>{console.log(o),this._ToastrService.success("Password reseted","success"),localStorage.removeItem("usertoken"),localStorage.setItem("usertoken",o.token),this._AuthService.saveUserData(),this._Router.navigate(["/home"])},error:o=>{console.log(o.error),this._ToastrService.warning(`${o.error.message}`,`${o.error.statusMsg}`)}})}static#e=this.\u0275fac=function(r){return new(r||t)(e.Y36(n.qu),e.Y36(g.e),e.Y36(c._W),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-resetpassword"]],decls:13,vars:3,consts:[[1,"bg-main-light","mx-auto","my-3","w-75"],[3,"formGroup","ngSubmit"],[1,"p-3"],[1,"h3","text-main"],["type","email","id","email","placeholder","Email","formControlName","email",1,"form-control"],["inputEmail",""],["class","alert alert-danger",4,"ngIf"],["type","password","id","newPassword","placeholder","newPassword","formControlName","newPassword",1,"form-control"],["inputnewPassword",""],[1,"btn-main","mt-3"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(r,s){if(1&r&&(e.TgZ(0,"section",0)(1,"form",1),e.NdJ("ngSubmit",function(){return s.handelform()}),e.TgZ(2,"div",2)(3,"h2",3),e._uU(4,"reset your account password"),e.qZA(),e._UZ(5,"input",4,5),e.YNc(7,J,3,2,"div",6),e._UZ(8,"input",7,8),e.YNc(10,q,3,2,"div",6),e.TgZ(11,"button",9),e._uU(12,"Verify"),e.qZA()()()()),2&r){const i=e.MAs(6),a=e.MAs(9);let d,f;e.xp6(1),e.Q6J("formGroup",s.resetpasswordform),e.xp6(6),e.Q6J("ngIf",(null==(d=s.resetpasswordform.get("email"))?null:d.errors)&&((null==(d=s.resetpasswordform.get("email"))?null:d.touched)||i.value.length>0)),e.xp6(3),e.Q6J("ngIf",(null==(f=s.resetpasswordform.get("newPassword"))?null:f.errors)&&((null==(f=s.resetpasswordform.get("newPassword"))?null:f.touched)||a.value.length>0))}},dependencies:[p.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]})}return t})()}];let R=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(F),u.Bz]})}return t})();var U=m(9862);let b=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=e.oAB({type:t});static#o=this.\u0275inj=e.cJS({imports:[p.ez,R,n.u5,n.UX,c.Rh.forRoot(),U.JF]})}return t})()}}]);