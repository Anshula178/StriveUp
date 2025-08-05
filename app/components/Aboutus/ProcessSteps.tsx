'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from "next/link";
import { useRef } from 'react'
import { Search, Map, Palette, MessageCircle, TestTube, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Brief & Research',
    description: 'Deep dive into client vision, target audience psychology, and competitive landscape analysis.',
    icon: Search,
    color: '#10b981',
    bgColor: '#dcfce7',
    borderColor: '#bbf7d0',
  },
  {
    number: 2,
    title: 'Sitemap & Wireframing',
    description: 'Architect the user journey with strategic information hierarchy and intuitive navigation flows.',
    icon: Map,
    color: '#3b82f6',
    bgColor: '#dbeafe',
    borderColor: '#bfdbfe',
  },
  {
    number: 3,
    title: 'Design & Content',
    description: 'Synthesize brand identity with compelling visuals and persuasive copy that converts.',
    icon: Palette,
    color: '#8b5cf6',
    bgColor: '#ede9fe',
    borderColor: '#ddd6fe',
  },
  {
    number: 4,
    title: 'Feedback & Revisions',
    description: 'Collaborative refinement through structured feedback loops and strategic iterations.',
    icon: MessageCircle,
    color: '#f97316',
    bgColor: '#fed7aa',
    borderColor: '#fdba74',
  },
  {
    number: 5,
    title: 'Prototyping & Testing',
    description: 'Validate interactions through rigorous usability testing and performance optimization.',
    icon: TestTube,
    color: '#6366f1',
    bgColor: '#e0e7ff',
    borderColor: '#c7d2fe',
  },
  {
    number: 6,
    title: 'Launch 🚀',
    description: 'Deploy with precision monitoring, analytics integration, and continuous optimization.',
    icon: Rocket,
    color: '#ec4899',
    bgColor: '#fce7f3',
    borderColor: '#f9a8d4',
  },
]

export default function ProcessSteps() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #eff6ff 100%)' }}>
      <div
        className="absolute inset-0"
        
      />

      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl  mb-4 uppercase text-blue" >
            <span>
              Our Creative Process
            </span>
          </h2>
          <p className="text-4xl lg:text-6xl max-w-6xl mx-auto font-bold">
            From concept to launch, every step is meticulously crafted to deliver exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full" style={{ backgroundColor: '#e5e7eb' }} />

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full shadow-lg"
            style={{
              height: lineProgress,
              background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899)',
              filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))',
            }}
          />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: 'spring',
                    bounce: 0.3,
                  }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div
                      className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
                      style={{ backgroundColor: step.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 rounded-full flex items-center justify-center shadow-lg" style={{ borderColor: '#e5e7eb' }}>
                      <span className="text-xs font-bold" style={{ color: '#374151' }}>{step.number}</span>
                    </div>
                  </div>

                  <motion.div
                    className={`${isEven ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-full max-w-md`}
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="backdrop-blur-sm border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300" style={{ 
                      backgroundColor: step.bgColor, 
                      borderColor: step.borderColor 
                    }}>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 shadow-md" style={{ backgroundColor: step.color }}>
                        Step {step.number}
                      </div>

                      <h3 className="text-2xl font-bold mb-3" style={{ color: '#1f2937' }}>{step.title}</h3>

                      <p className="leading-relaxed text-base" style={{ color: '#4b5563' }}>{step.description}</p>

                      <div className="mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: step.color }} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
<Link href={''}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
          }}>
            <span>Ready to start your journey?</span>
            <Rocket className="w-5 h-5" />
          </button>
        </motion.div>
        </Link>
      </div>
    </section>
  )
}