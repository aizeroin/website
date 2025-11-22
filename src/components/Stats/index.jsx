import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate: (value) => setCount(Math.floor(value)),
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return <span>{count}+</span>;
};

const Stats = () => {
  const statsData = [
    { label: "Happy Clients", value: 232 },
    { label: "Projects", value: 521 },
    { label: "Hours Of Support", value: 1453 },
    { label: "Hard Workers", value: 32 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter from={0} to={stat.value} duration={2} />
              </h3>
              <p className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
