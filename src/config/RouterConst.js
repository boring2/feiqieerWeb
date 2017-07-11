let baseApi
if (process.env.NODE_ENV !== 'development') {
  baseApi = 'http://ftle.iqiuqiu.me/api'
} else {
  baseApi = '/api'
}
export {
  baseApi
}
export default {
  // page about
  about: {
    index: {title: '关于园所', href: '/about', shortLink: 'about', api: `${baseApi}/settings/about_me`},
    intro: {title: '园所简介', href:'/about/intro', shortLink: 'intro', api: `${baseApi}/settings/about_me`},
    concept: {title: '教学理念', href:'/about/concept', shortLink: 'concept', api: `${baseApi}/settings/about_teaching_philosophy`},
    facility: {title: '校园设施', href:'/about/facility', shortLink: 'facility', api: `${baseApi}/settings/about_facility`},
    features: {title: '园所特色', href:'/about/features', shortLink: 'features', api: `${baseApi}/settings/about_features`},
    team: {title: '我们团队', href:'/about/team', shortLink: 'team', api: `${baseApi}/settings/about_teams`},
    histroy: {title: '辉煌历程', href:'/about/histroy', shortLink: 'histroy', api: `${baseApi}/settings/about_glorious_history`},
    background: {title: '幼儿生活', href:'/about/background', shortLink: 'background', api: `${baseApi}/settings/about_education_background`},
    word: {title: '园长寄语', href:'/about/word', shortLink: 'word', api: `${baseApi}/settings/about_principal_message`},
    rules: {title: '规章制度', href:'/about/rules', shortLink: 'rules', api: `${baseApi}/settings/about_regulations`},
    contact: {title: '联系我们', href:'/about/contact', shortLink: 'contact', api: `${baseApi}/settings/about_contact_us`}
  },

  // page health
  health :{
    index: {title: '卫生保健', href: '/health', shortLink: 'health', api: `${baseApi}/articles?category_id=5`},
    life: {title: '生活信息', href: '/health/life', shortLink: 'life', api: `${baseApi}/articles?category_id=5`},
    conduct: {title: '保健宣传', href: '/health/conduct', shortLink: 'conduct', api: `${baseApi}/articles?category_id=6`},
    food: {title: '幼儿饮食', href: '/health/food', shortLink: 'food', api: `${baseApi}/articles?category_id=7`},
    menu: {title: '天天菜谱', href: '/health/menu', shortLink: 'menu', api: `${baseApi}/articles?category_id=8`}
  },

  // page features
  features: {
    index: {title: '园所课程', href: '/features', shortLink: 'features', api: `${baseApi}/settings/course_features`},
    course: {title: '课程特色', href: '/features/course', shortLink: 'course', api: `${baseApi}/settings/course_features`},
    creative: {title: '创意课程', href: '/features/creative', shortLink: 'creative', api: `${baseApi}/settings/course_creative`},
    activity: {title: '体育课程', href: '/features/activity', shortLink: 'activity', api: `${baseApi}/settings/course_activity`},
    parenting: {title: '亲子课程', href: '/features/parenting', shortLink: 'parenting', api: `${baseApi}/settings/course_parenting`},
    interest: {title: '兴趣课程', href: '/features/interest', shortLink: 'interest', api: `${baseApi}/settings/course_interest`},
    learnActivity: { title: '学习活动', href: '/features/learnActivity', shortLink: 'learning-activity', api: baseApi + '/settings/course_learning_activity' },
    gameActivity: { title: '游戏活动', href: '/features/gameActivity', shortLink: 'game-activity', api: baseApi + '/settings/course_game_activity' },
    sportsActivity: { title: '运动活动', href: '/features/sportsActivity', shortLink: 'sports-activity', api: baseApi + '/settings/course_sports_activity' },
    lifeGuide: { title: '生活指引', href: '/features/lifeGuide', shortLink: 'life-guide', api: baseApi + '/settings/course_life_guide' },
    dailyRest: { title: '一日作息', href: '/features/dailyRest', shortLink: 'daily-rest', api: baseApi + '/settings/course_daily_rest' }
  },

  // page admissions
  admissions: {
    index: {title: '入学招生', href: '/admissions', shortLink: 'admissions', api: `${baseApi}/settings/admissions_guide`},
    guide: {title: '招生简章', href: '/admissions/guide', shortLink: 'guide', api: `${baseApi}/settings/admissions_guide`},
    charges: {title: '收费标准', href: '/admissions/charges', shortLink: 'charges', api: `${baseApi}/settings/admissions_charges`},
    admission: {title: '在线报名', href: '/admissions/admission', shortLink: 'admission'},
    visit: {title: '预约参观', href: '/admissions/visit', shortLink: 'visit'}
  },

  // page teachers
  teachers: {
    index: {title: '师资风采', href: '/teachers', shortLink: 'teachers', api: `${baseApi}/articles?category_id=2`},
    master: {title: '园长介绍', href: '/teachers/master', shortLink: 'guide', api: `${baseApi}/articles?category_id=2`},
    team: {title: '骨干团队', href: '/teachers/team', shortLink: 'team', api: `${baseApi}/articles?category_id=3`},
    teacher: {title: '老师介绍', href: '/teachers/teacher', shortLink: 'teacher', api: `${baseApi}/articles?category_id=4`},
  },

  // page activity
  activity: {
    index: {title: '园所动态', href: '/activity',shortLink: 'activity', api: `${baseApi}/articles?category_id=1`}
  },

  // page activity
  playbackPage: {
    index: {title: '精彩回放', href: '/playbackPage',shortLink: 'playbackPage', api: `${baseApi}/articles?category_id=10`}
  },

  // page contact
  contacts: {
    index: {title: '联系我们', href: '/contacts', shortLink: 'contacts', api: `${baseApi}/settings/us_contact_us`},
    contact: {title: '联系我们', href: '/contacts/contact', shortLink: 'contact', api: `${baseApi}/settings/us_contact_us`},
    join: {title: '加盟我们', href: '/contacts/join', shortLink: 'join', api: `${baseApi}/settings/us_join_us`},
    careers: {title: '招贤纳士', href: '/contacts/careers', shortLink: 'careers', api: `${baseApi}/settings/about_careers`}
  },

  //post link
  post: {
    admission: {api: `${baseApi}/admission`},
    visit: {api: `${baseApi}/appointments`}
  },
  //playback
  playback: {
    index: {api: `${baseApi}/articles?category_id=10`}
  }
}
