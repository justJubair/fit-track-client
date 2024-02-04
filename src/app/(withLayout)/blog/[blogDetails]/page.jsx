import { Fullscreen } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div >
            <div className="bg-black h-16"></div>
            <div className='px-4 md:w-4/5 mx-auto'>
                <div>
                    <h1 className='text-6xl text-center my-4 italic font-bold'>Blog Titel</h1>
                </div>
                <div className='flex justify-center my-4'>
                    <Image width={"1000"} height={"800"} src={"https://plus.unsplash.com/premium_photo-1661962504814-21826fd543c3?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Card Image" className="w-auto h-auto rounded-2xl " />
                </div>
                <div className='my-10'>
                    <p className='md:text-xl' style={{
                        wordSpacing: "5px",
                        textAlign: "justify",
                        whiteSpace: "pre-line"
                    }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia numquam obcaecati perferendis? Suscipit quam mollitia tempore accusamus harum dolor possimus reprehenderit vero neque soluta optio nulla ducimus beatae nostrum quos iure voluptatibus veniam deserunt, architecto inventore eligendi, aliquam porro. Quidem velit eos officia perferendis laboriosam veniam rem harum deleniti consequuntur recusandae cum sequi ut reiciendis exercitationem natus, vel tempore porro eligendi corrupti nostrum neque enim doloremque aliquam voluptas! Iste quod nobis porro in, minus est provident excepturi dolorum quas, natus nesciunt, accusamus reprehenderit deserunt nostrum ex nam praesentium adipisci enim modi cumque harum. Necessitatibus, vitae quasi? Eos at explicabo rerum inventore voluptatibus eligendi error odit officiis, nihil quos debitis, veritatis aspernatur maiores aperiam illo cum quam distinctio illum magni perferendis ipsa. Eaque a veritatis dolores ad adipisci sint cupiditate provident, harum distinctio ipsa animi, autem laudantium dolor doloremque expedita illo minima voluptatem, corporis odio quia? Nulla amet ea debitis laboriosam repellendus, iure cupiditate ut esse voluptatibus eius odio iste. Soluta, deleniti. Iste quae ut veritatis eveniet pariatur sint, est, adipisci possimus laboriosam perspiciatis sunt aut quasi nihil fugiat obcaecati quaerat eligendi beatae hic nobis voluptatum in architecto voluptas cum a! Accusamus dolorem iure laborum cum odit a accusantium sequi eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur debitis eos accusamus maiores enim, atque veniam, tenetur, qui ipsum praesentium incidunt? Tempore quisquam ratione, eum saepe in praesentium facere minima at quas laudantium. Voluptas porro modi voluptatum eaque numquam delectus temporibus dolorum asperiores dolor magni ad sed corporis unde nam animi accusamus, dicta architecto culpa cupiditate. Vero rerum ducimus eos similique dignissimos, veniam natus placeat necessitatibus, est beatae eaque dolores veritatis, nihil voluptate nostrum. Quaerat porro explicabo minima laudantium, sit molestias quo minus vel esse quod eius corrupti ad culpa nesciunt voluptas nihil. Recusandae reprehenderit fuga doloremque, porro corporis mollitia aliquam aspernatur deleniti dolores debitis pariatur delectus ipsam illo quaerat labore officiis quisquam minima eius, quae distinctio perferendis inventore. Natus ab et voluptas? Labore, sed necessitatibus accusamus distinctio minus, omnis doloremque error, delectus nostrum reiciendis saepe provident. Incidunt, perferendis molestias! Omnis minus nihil praesentium dolor vitae eligendi, assumenda id rerum quae quam at veritatis laborum fuga, nisi laudantium cum. Repellat, aliquam reiciendis. Vero in placeat optio atque corrupti, et, molestias necessitatibus iste omnis dolore cupiditate accusamus, quia quo laboriosam beatae inventore. Laborum nemo sit soluta quam ipsum odit ipsa esse? Quos ullam ut deserunt explicabo adipisci veritatis similique repellendus excepturi!</p>
                </div>
                {/* comments section */}
                <div>

                </div>
                {/* comments section */}
            </div>

        </div>
    );
};

export default page;