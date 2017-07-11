import Vue from 'vue'
import Router from 'vue-router'
import IndexContent from '@/components/IndexContent'
import RightContent from '@/components/RightContent'
import ArticleList from '@/components/ArticleList'
import AdmissionForm from '@/components/AdmissionForm'
import VisitForm from '@/components/VisitForm'
import NormalContent from '@/components/NormalContent'
import About from '@/pages/About'
import Health from '@/pages/Health'
import Teachers from '@/pages/Teachers'
import Features from '@/pages/Features'
import Activity from '@/pages/Activity'
import Playback from '@/pages/Playback'
import Admissions from '@/pages/Admissions'
import Contacts from '@/pages/Contacts'
import RouterConst from '../config/RouterConst'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexContent',
      component: IndexContent
    },
    // about page
    {
      path: RouterConst.about.index.href,
      component: About,
      children: [
        {path: RouterConst.about.intro.href},
        {path: RouterConst.about.concept.href},
        {path: RouterConst.about.facility.href},
        {path: RouterConst.about.features.href},
        {path: RouterConst.about.team.href},
        {path: RouterConst.about.histroy.href},
        {path: RouterConst.about.background.href},
        {path: RouterConst.about.word.href},
        {path: RouterConst.about.rules.href},
        {path: RouterConst.about.contact.href}
      ]
    },
    // health page
    {
      path: RouterConst.health.index.href,
      component: Health,
      children: [
        {path: '', component: ArticleList},
        {path: RouterConst.health.life.href, component: ArticleList},
        {path: RouterConst.health.conduct.href, component: ArticleList},
        {path: RouterConst.health.food.href, component: ArticleList},
        {path: RouterConst.health.menu.href, component: ArticleList},
        {path: RouterConst.health.index.href + '/:id', component: RightContent},
        {path: RouterConst.health.life.href + '/:id', component: RightContent},
        {path: RouterConst.health.conduct.href + '/:id', component: RightContent},
        {path: RouterConst.health.food.href + '/:id', component: RightContent},
        {path: RouterConst.health.menu.href + '/:id', component: RightContent}
      ]
    },
    // admissions page
    {
      path: RouterConst.admissions.index.href,
      redirect: RouterConst.admissions.guide.href,
      component: Admissions,
      children: [
        {path: '', component: NormalContent},
        {path: RouterConst.admissions.guide.href, component: NormalContent},
        {path: RouterConst.admissions.charges.href, component: NormalContent},
        {path: RouterConst.admissions.admission.href, component: AdmissionForm},
        {path: RouterConst.admissions.visit.href, component: VisitForm},
      ]
    },
    // teachers page
    {
      path: RouterConst.teachers.index.href,
      component: Teachers,
      children: [
        {path: '', component: ArticleList},
        {path: RouterConst.teachers.master.href, component: ArticleList},
        {path: RouterConst.teachers.team.href, component: ArticleList},
        {path: RouterConst.teachers.teacher.href, component: ArticleList},
        {path: RouterConst.teachers.index.href + '/:id', component: RightContent},
        {path: RouterConst.teachers.master.href + '/:id', component: RightContent},
        {path: RouterConst.teachers.team.href + '/:id', component: RightContent},
        {path: RouterConst.teachers.teacher.href + '/:id', component: RightContent}
      ]
    },
    // features page
    {
      path: RouterConst.features.index.href,
      component: Features,
      children: [
        {path: RouterConst.features.course.href},
        {path: RouterConst.features.creative.href},
        {path: RouterConst.features.activity.href},
        {path: RouterConst.features.parenting.href},
        {path: RouterConst.features.interest.href},
        {path: RouterConst.features.learnActivity.href},
        {path: RouterConst.features.gameActivity.href},
        {path: RouterConst.features.sportsActivity.href},
        {path: RouterConst.features.lifeGuide.href},
        {path: RouterConst.features.dailyRest.href},
      ]
    },
    // activity page
    {
      path: RouterConst.activity.index.href,
      component: Activity,
      children: [
        {path: '', component: ArticleList},
        {path: RouterConst.activity.index.href + '/:id', component: RightContent}
      ]
    },

    // playback page
    {
      path: RouterConst.playbackPage.index.href,
      component: Playback,
      children: [
        {path: '', component: ArticleList},
        {path: RouterConst.playbackPage.index.href + '/:id', component: RightContent}
      ]
    },

    // concact page
    {
      path: RouterConst.contacts.index.href,
      component: Contacts,
      children: [
        {path: RouterConst.contacts.contact.href},
        {path: RouterConst.contacts.join.href},
        {path: RouterConst.contacts.careers.href}
      ]
    }
  ]
})
