import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>Our Mission</h2>
            <div>
             <p>The goal of ShinDig is to empower individuals to create, plan, and execute any event type, at any size. ShinDig will become the only applicaiton needed for both host and guest to assign tasks, save event infomraiton, and invite friends and family.

.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i class="fas fa-glass-cheers"></i></p>
                <p className="service-title">Create</p>
                <p>With ShinDig you are able to create any type of gathering.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i class="fas fa-mail-bulk"></i></p>
                <p className="service-title">Invite</p>
                <p>Save the stamps, facebook events, send your invites courtesy of ShinDig.</p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i class="far fa-calendar-check"></i></p>
                <p className="service-title">Plan</p>
                <p>With ShinDig, gatherings of any kind become easier, plan your event and have your guest help by providing them with Date, Time, needs for the gathering, location etc....</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
            <h2>The Team</h2>
            <div>
              <p>Integer sit amet venenatis erat. Cras elementum tortor odio, sit amet euismod nunc cursus ut. Donec sollicitudin orci sed enim volutpat, volutpat rutrum magna semper. Fusce leo lacus, pulvinar sit amet dignissim in, consectetur eget nulla. Etiam ac turpis augue. Sed tincidunt pulvinar tincidunt. Integer ac blandit magna. Nulla dapibus convallis luctus. </p>
              <p>Ut elementum urna sit amet elit egestas hendrerit. Vivamus quis sem fringilla, tincidunt nisi non, congue libero. Etiam cursus nulla quis sapien varius, eget accumsan augue mattis. Cras accumsan sapien nulla, eu eleifend odio tempus sit amet. Suspendisse gravida hendrerit sapien, ut molestie mi pellentesque eget. Aliquam eleifend velit vel libero elementum, vitae consectetur nisl sollicitudin. Suspendisse volutpat fringilla vehicula.</p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;