import{I as v,r as e}from"./entry.cd696208.js";import{u as d}from"./helpers.9f7e3cae.js";const S=`${{}.VITE_API_SEARCH_URL}?api_key=${{}.VITE_API_KEY}`,E=v("searchStore",()=>{const a=e([]),o=e(!1),r=e(!1),n=e(""),l=e(!1),c=e(0),f=e(0);return{movies:a,isLoading:o,isError:r,searchStr:n,isNewSearchStr:l,totalPages:c,totalResults:f,getMovies:async({str:s,page:t=1,isNewStr:u=!1})=>{if(s.length<2)return;u&&(l.value=!0),r.value=!1,o.value=!0,n.value=s;const i=await(await fetch(`${S}&query=${s}&page=${t}`)).json();a.value=i.results,c.value=i.total_pages,f.value=i.total_results,o.value=!1,l.value=!1,a.value.length<1&&(r.value=!0)},addToFavorites:s=>{const t=d();t.movies.find(u=>u.id===s.id)||t.movies.push({...s,isWatched:!1})}}});export{E as u};
