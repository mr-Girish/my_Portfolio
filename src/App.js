import './App.css';
import pic from './images/pic.jpeg'
function App() {
  return (
    <div className="App bg-[#436DBF] h-screen flex justify-center items-center">
       <div className='main_div h-3/4 w-1/2 '>
            <div className='inner_div flex justify-center '>
                <img  src={pic} className=" w-36 h-36 rounded-full" alt="" />
            </div>
           <div className='flex justify-center '>
           <div className='textcontent  '>
                  <div className='Name  w-96 flex justify-center text-[rgb(255,255,255)] text-[3.25em] tracking-[-0.075em]  font-thin'>Girish Kumar</div>
                  <div className='degination w-96 flex justify-center text-[rgb(255,255,255,.56)] text-[1.25em] tracking-[-0.025em]  font-thin'>Software Engineer</div>
                  <hr />
                  <div className='social  w-96 flex justify-center' >
                       <div className='twitter border border-[#ffffff24] rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="white" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                          </svg>
                       </div>
                      <div className='instagram border border-[rgb(255,255,255,0.14)] rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <rect x="4" y="4" width="16" height="16" rx="4" />
                              <circle cx="12" cy="12" r="3" />
                              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                      </div>
                     <div className='mail border border-[rgb(255,255,255,0.14)] rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                          </svg>
                     </div>
                     <div className='facebook border border-[rgb(255,255,255,0.14)] rounded-full'>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" stroke-width=".01" stroke="#ffffff" fill="white" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                          </svg>
                     </div>
                  </div>
            </div>
           </div>
       </div>
    </div>
  );
}

export default App;
