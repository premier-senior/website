import Image from "next/image"

const testimonials = [
  {
    name: "Susie B.",
    gender: "woman",
    text: "Jenny is the best! She went above and beyond helping my husband and I find a place for his father. And it was no easy task! We would recommend her to anyone looking for this type of service!",
  },
  {
    name: "Jared G",
    gender: "man",
    text: "Jenny's empathy and support for everyone is amazing, and she is the best in the business when it comes to senior placement! I highly recommend anyone go through her during this process, she will get you taken care of at the most professional level!",
  },
  {
    name: "Danielle Bruck",
    gender: "woman",
    text: "Jenny is one of the kindest and most thorough people I have ever met. Working with her is a blessing. She goes above and beyond with each family she helps. She is, without a doubt, the best advocate for the older population. She continuously impresses me with her knowledge of services offered, state regulations, and ability to match people with the right community for them. She will stick with you through every step of the process and fully explain each step. If you're looking for senior living, give Jenny a call.",
  },
  {
    name: "Warren R",
    gender: "man",
    text: "It takes a special person to do what you do. I'm glad our paths crossed, I know the outcome for my Uncle would not have been as good as it is if I were doing this on my own",
  },
  {
    name: "Ken Lewis",
    gender: "man",
    text: "Jenny and Premier Solutions is THE PLACE you need to contact if you have issues or concerns with senior living placement. Jenny is the sweetest person and makes you and your family feel so comfortable with anything you may need. I highly recommend this company to anyone that needs it.",
  },
  {
    name: "Kristen Kessler",
    gender: "woman",
    text: "Jenny is top notch when it comes to helping her clients and their families on care options that meet their needs. She really takes her time listening to their needs and desires when looking for a senior living community. She has the knowledge and experience needed when finding the right care for her clients and she is with them every step of the way.",
  },
  {
    name: "Dell-Ann L",
    gender: "woman",
    text: "Contact Jenny Kenderes! She is a wealth of knowledge and so helpful. She helped us find a place for our dad in a week!",
  },
  {
    name: "Alexis Golden",
    gender: "woman",
    text: "HIGHLY RECOMMEND PREMIER SENIOR SOLUTIONS. Jenny was so helpful with everything we needed for my family. She was so helpful and patient with us, and assisted us with everything we needed. Shes the best around!",
  },
  {
    name: "MaryLynne Bonta",
    gender: "woman",
    text: "I cannot find enough kind words to describe Jenny with Premier Senior Solutions. The first phone call that should be made, if someone is looking for Independent, Assisted, Skilled or Staying at Home solutions, is to Premier Senior Solutions. After calling me, to respond to my email, Jenny set up a meeting with me. We reviewed my wants, needs & financial situation. Her next phone call was to set up appointments with me to view two places. This would allow Jenny to know if my needs were met or if additional appointments were needed. Jenny hit my needs on the 2nd complex i viewed. No additional appointments were needed. Within days, I returned to the apartment complex and put down a deposit. I have since moved in and am so happy. I met some wonderful people and enjoy various activities with them; even if its only sitting & having a cup of coffee and laughing. PLEASE call Jenny. If you're reading reviews, you must have a placement need for yourself or a loved one. Mine happened to be Independent living but Jenny has contacts for all needs. Thank you Jenny, for making my next phase of life, a wonderful one!",
  },
  {
    name: "Sam Whiskin",
    gender: "man",
    text: "I never write reviews, but I had to for this. Jenny is an angel. I had a crisis situation with both my parents, and she worked with me the entire way to find somewhere for my mother when I was overwhelmed and flailing. From the bottom of my heart, thank you for all that you do.",
  },
  {
    name: "Julie Burke",
    gender: "woman",
    text: "Jenny is the absolute BEST! This is a HUGE decision and knowing you have someone who is caring and loving in your corner to make it right is so important. Jenny is your girl!",
  },
  {
    name: "Laura Sampson",
    gender: "woman",
    text: "I HIGHLY RECOMMEND PREMIER SENIOR SOLUTIONS!! Jenny was Amazing!! My folks have been together for 60 years and mom has been diagnosed with dementia. Jenny worked with my family every step of the way to get mom placed in a fantastic facility! Her experience shined in the way she knew how to comfort dad and the entire family during this transition. Jenny is very knowledgeable about insurance, Medicare, Medicaid, Nursing Homes etc. She went above and beyond and was there 24/7 for my family. She truly cares and it shows. I recommend her to any family who is dealing with the care of a loved one",
  },
  {
    name: "Maureen Schreiber",
    gender: "woman",
    text: "Finding the best senior living option is very overwhelming and it's hard to know where to start. I'm so grateful for Jenny's knowledge and personal commitment to her clients. She treats every situation uniquely and with utmost respect for the senior. Jenny's experience of working in the industry helped on so many levels as there are many factors to consider that we wouldn't have known about otherwise. I highly recommend Premier Senior Solutions!",
  },
  {
    name: "Diane S",
    gender: "woman",
    text: "Jenny Kenderes, Premier Senior Solutions is absolutely amazing! She quickly helped us find the perfect place for our Mom; who was no longer safe to be in her own home. Jenny is so knowledgeable of all the places that could help with Assisted Living. She has so much expertise and is a very caring, sincere, loving and hardworking person. She set everything up for us to look at the different Assisted Living places and was able to guide us in finding something that was perfect in meeting our needs! Jenny was with us from the beginning to the end – giving us detailed information about the places, setting up tours to see them, negotiating and got us a great deal. She is so sweet; as she is still checking in with us asking how things are going. We are so thankful that we found Jenny and impressed and grateful for everything she has done to help our Mom and us through this difficult time! We are recommending her to everyone! Jenny Kenderes, Premier Senior Solutions is the absolute best ever!!!!",
  },
  {
    name: "Jim Prodan",
    gender: "man",
    text: "After mom had her fall, she ended up in a nursing home for rehab. I found out she could not return to her assited living facillity. We needed to find her a new facility with memory care. Jenny came in and help us with everything! She was amazing! I never met anyone so helpful and caring as she is. She stayed in constant contact and took care of everything! I can't thank her enough! She is the best! Thank you Jenny!",
  },
  {
    name: "Missy Krugh",
    gender: "woman",
    text: "Jenny is one of the kindest, most knowledgeable and experienced people in the senior living space. She cares about her families and will help you navigate the process to ensure you find the best senior living community for your loved one. She goes above and beyond and is a true blessing!",
  },
  {
    name: "Dana Acy",
    gender: "woman",
    text: "This company really gave great attention to the details. Sometimes we don't know how to process everything and they filled in the gaps for me. Truly priceless service I would recommend them to anyone.",
  },
  {
    name: "Kim Mobley",
    gender: "woman",
    text: "I cannot say enough about Jenny Kenderes and Premier Senior Solutions. Jenny helped my husband and I every step of the way as we worked to get my mother in law the help and care she needed. Jenny reviewed with us the many options we had to get her the best care possible. She explained everything to us in detail and answered all of our millions of questions that we asked her in great detail. She has made this very stressful, emotional time a lot easier for all of us. I cannot recommend Jenny and Premier Senior Solutions enough and my husband and I both want to say thank you from the bottom of our hearts.",
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="break-inside-avoid mb-6 bg-secondary rounded-xl p-6 shadow-sm"
            >
              <p className="text-muted-foreground font-poppins font-bold text-[14px] leading-relaxed mb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <Image
                  src={testimonial.gender === "man" ? "/images/avatar-man.png" : "/images/avatar-woman.png"}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full flex-shrink-0"
                />
                <span className="font-bold text-foreground text-sm">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
