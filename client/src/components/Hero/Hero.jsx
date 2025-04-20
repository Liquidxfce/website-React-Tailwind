import "./Hero.css";

const Hero = () => {
  
    return (
      <>
        <div className=" border border-solid border-black m-5">
            <div className=" lg:flex flex-row-reverse">
              <div className="">
                <img src="https://placehold.co/600x400/png" alt="" className=" w-auto h-auto m-5 sm:w-1/2"/>
              </div>
              <div className=" text-center sm:w-1/2 sm:pt-10">
                <h2 className=" uppercase">Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, libero qui aliquid rerum, incidunt, harum eum nemo nihil at tempore sint ab vero et dolor ea suscipit quidem in ex quod minima nisi! Soluta cum qui ipsa, odio, quaerat dolores eum blanditiis, alias deserunt iusto natus libero repellendus doloribus? Laborum minima voluptates odit magni nemo cupiditate consequuntur in porro maxime eaque accusamus, commodi ea id itaque at libero explicabo nostrum! Tempora id dolores autem quaerat rem nisi dolorem, repellat rerum consequatur eos atque esse mollitia in sequi reiciendis necessitatibus, voluptates ratione. In laborum veritatis expedita, tempora officiis non blanditiis provident?</p>
              </div>
            </div>
        </div>
      </>
    )
  }

export default Hero; 