const routingConfig = [
  {
    lang: "en",
    pageRoute: "/salary",
    asPath: "/salary"
  },
  {
    lang: "fr",
    pageRoute: "/salary",
    asPath: "/salarie"
  },
  {
    lang: "en",
    pageRoute: "/salaryResult",
    asPath: "/salary/"
  },
  {
    lang: "fr",
    pageRoute: "/salaryResult",
    asPath: "/salarie/"
  },
];

export const getPathByPathname = (pathname, lng) => {
  return routingConfig.find(a => a.pageRoute === pathname && a.lang === lng);
};

function replaceSpecialChar(param,char){
  return param.replace(' ',char);
}

export const formatParams = (position,location) =>{
  const positionParam = {
    q: 'q',
    param:replaceSpecialChar(position, '-')
  }

  const locationParam = {
    l: 'l',
    param:replaceSpecialChar(location,'-')
  }
  return{
    asPathParams: `${positionParam.q}-${positionParam.param}-${locationParam.l}-${locationParam.param}`,
    hrefParams: `?query=${positionParam.param}-${locationParam.param}`,
    positionParam: positionParam.param,
    locationParam: locationParam.param
  }
}