import React, { useRef } from "react";
export default function LatestArticles() {

	const sliderRef = useRef(null);

	const drag = useRef({
		isDown: false,
		startX: 0,
		scrollLeft: 0,
	});

	const articles = [
		{
			id: 1,
			title: "Understanding Heart Health in Modern Lifestyle",
			img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
			doctor: "Dr. Meera Singh",
			doctorImg: "https://randomuser.me/api/portraits/women/68.jpg",
			updated: "12 Feb 2026",
		},
		{
			id: 2,
			title: "Nutrition Tips for Busy Professionals",
			img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
			doctor: "Dr. Rahul Patel",
			doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
			updated: "08 Feb 2026",
		},
		{
			id: 3,
			title: "Sleep Cycles and Mental Performance",
			img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
			doctor: "Dr. Ananya Kapoor",
			doctorImg: "https://randomuser.me/api/portraits/women/50.jpg",
			updated: "02 Feb 2026",
		},
		{
			id: 4,
			title: "Daily Stretching Routines That Work",
			img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
			doctor: "Dr. Vikram Desai",
			doctorImg: "https://randomuser.me/api/portraits/men/70.jpg",
			updated: "28 Jan 2026",
        },
		{
			id: 1,
			title: "Understanding Heart Health in Modern Lifestyle",
			img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
			doctor: "Dr. Meera Singh",
			doctorImg: "https://randomuser.me/api/portraits/women/68.jpg",
			updated: "12 Feb 2026",
		},
		{
			id: 2,
			title: "Nutrition Tips for Busy Professionals",
			img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
			doctor: "Dr. Rahul Patel",
			doctorImg: "https://randomuser.me/api/portraits/men/45.jpg",
			updated: "08 Feb 2026",
		},
		{
			id: 3,
			title: "Sleep Cycles and Mental Performance",
			img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
			doctor: "Dr. Ananya Kapoor",
			doctorImg: "https://randomuser.me/api/portraits/women/50.jpg",
			updated: "02 Feb 2026",
		},
		{
			id: 4,
			title: "Daily Stretching Routines That Work",
			img: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
			doctor: "Dr. Vikram Desai",
			doctorImg: "https://randomuser.me/api/portraits/men/70.jpg",
			updated: "28 Jan 2026",
		},
	];

	const onMouseDown = (e) => {
		drag.current.isDown = true;
		sliderRef.current.classList.add("cursor-grabbing");

		drag.current.startX =
			e.pageX - sliderRef.current.offsetLeft;

		drag.current.scrollLeft =
			sliderRef.current.scrollLeft;
	};

	const stopDrag = () => {
		drag.current.isDown = false;
		sliderRef.current.classList.remove("cursor-grabbing");
	};

	const onMouseMove = (e) => {
		if (!drag.current.isDown) return;

		e.preventDefault();

		const x =
			e.pageX - sliderRef.current.offsetLeft;

		const walk = (x - drag.current.startX) * 1.4;

		sliderRef.current.scrollLeft =
			drag.current.scrollLeft - walk;
	};

	return (
        <div className="px-8 py-6">
            <div
                ref={sliderRef}
                onMouseDown={onMouseDown}
                onMouseLeave={stopDrag}
                onMouseUp={stopDrag}
                onMouseMove={onMouseMove}
                className="
          flex gap-6
          overflow-x-auto
          cursor-grab
          select-none
          pb-4
        "
            >
                {articles.map((a) => (
                    <div
                        key={a.id}
                        className="
              flex-shrink-0
              w-[280px]
              bg-white/50
              rounded-2xl
              shadow-md
              overflow-hidden
              hover:shadow-xl
              transition
            "
                    >
                        {/* Image + Title */}
                        <div className="relative h-[170px]">
                            <img
                                src={`${a.img}?auto=format&fit=crop&w=600&q=60`}
                                alt={a.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="
                  absolute bottom-0 left-0 right-0
                  bg-gradient-to-t from-black/70 to-transparent
                  p-3
                ">
                                <h3 className="text-white text-sm font-semibold">
                                    {a.title}
                                </h3>
                            </div>
                        </div>

                        {/* Doctor Meta */}
                        <div className="p-4 flex items-center gap-3">
                            <img
                                src={a.doctorImg}
                                alt={a.doctor}
                                className="w-10 h-10 rounded-full object-cover"
                            />

                            <div className="text-sm">
                                <div className="font-medium">
                                    Reviewed by {a.doctor}
                                </div>

                                <div className="text-gray-500 text-xs">
                                    Last updated {a.updated}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
	);
}
