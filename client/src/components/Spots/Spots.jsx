import { Link } from "react-router";
import "./Spots.css";
// Add animation

function Spots() {
  
    return (
      <>
        <div>
            <section className=" hidden lg:flex space-x-4 m-5">
              <article>
                <div className=" object-cover h-auto w-auto transition-all duration-[1000ms] ease-in-out delay-[1ms] hover:scale-[1.1]">
                  <Link to="/">
                    <img
                      src="https://placehold.co/600x400?text=lorum+ipsum+dolor"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </article>
              <article>
                <div className=" object-cover h-auto w-auto transition-all duration-[1000ms] ease-in-out delay-[1ms] hover:scale-[1.1]">
                  <Link to="/">
                    <img
                      src="https://placehold.co/600x400?text=lorum+ipsum+dolor"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </article>
              <article>
                <div className=" object-cover h-auto w-auto transition-all duration-[1000ms] ease-in-out delay-[1ms] hover:scale-[1.1]">
                  <Link to="/">
                    <img
                      src="https://placehold.co/600x400?text=lorum+ipsum+dolor"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </article>
            </section>
        </div>
      </>
    )
  }

export default Spots; 