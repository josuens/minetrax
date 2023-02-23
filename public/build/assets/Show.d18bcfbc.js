import{A as w}from"./AppLayout.6e1bc9aa.js";import F from"./DeleteUserForm.d9221126.js";import{J as y}from"./SectionBorder.be8c988d.js";import $ from"./LogoutOtherBrowserSessionsForm.6ac95984.js";import k from"./TwoFactorAuthenticationForm.af2eb5ff.js";import v from"./UpdatePasswordForm.a9ce8231.js";import P from"./UpdateProfileInformationForm.73b8e564.js";import b from"./UpdateNotificationPreferencesForm.0c07642e.js";import{_ as j,p as t,o as s,c as B,w as p,a as n,t as U,b as o,d as a,e as m,F as x}from"./app.7e1a25c9.js";import"./ActionSection.1c17934f.js";import"./SectionTitle.bf3b75c1.js";import"./DialogModal.bdf03de0.js";import"./Modal.9f8913c5.js";import"./DangerButton.3366a31a.js";import"./Input.25228941.js";import"./InputError.e3cf4959.js";import"./SecondaryButton.65ece2a5.js";import"./ActionMessage.b24a8243.js";import"./Button.7ac35784.js";import"./Label.4033db1a.js";import"./FormSection.0d470014.js";import"./XInput.e1495020.js";import"./PasswordStrengthMeter.410cdfe4.js";import"./index.es.6752cad3.js";import"./XCheckbox.2bcdd7fc.js";import"./XSelect.9ebcd8d9.js";import"./XTextarea.708f9131.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,q){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),u=t("two-factor-authentication-form"),d=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:p(()=>[n("h2",S,U(e.__("Profile")),1)]),default:p(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.user},null,8,["user"]),o(r)])):m("",!0),n("div",null,[o(l,{user:e.$page.props.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):m("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(u,{class:"mt-10 sm:mt-0","requires-confirmation":!0}),o(r)])):m("",!0),o(d,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])])]),_:1})}const uo=j(A,[["render",I]]);export{uo as default};
