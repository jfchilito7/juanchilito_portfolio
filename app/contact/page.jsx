"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { delay } from "framer-motion";

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Telefono",
        description: "(+57) 300 473 4417"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "jfchilito7@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Direccion",
        description: "Cali, Valle del Cauca, Colombia"
    },
];

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: { delay:2.4, duration: 0.4, ease: "easeIn"}, 
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* Form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
                            <p className="text-white/60">
                            Transformemos tus ideas en soluciones digitales únicas. Con experiencia y creatividad, llevaré tu proyecto al siguiente nivel. ¡Hagamos algo increíble juntos!
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Nombre"/>
                                <Input type="lastname" placeholder="Apellido"/>
                                <Input type="email" placeholder="Email"/>
                                <Input type="phone" placeholder="Telefono"/>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Selecciona el servicio"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Seleccione el servicio</SelectLabel>
                                        <SelectItem value="est">Desarrollo web</SelectItem>
                                        <SelectItem value="cst">Desarrollo movil</SelectItem>
                                        <SelectItem value="mst">Diseño UI/UX</SelectItem>
                                        <SelectItem value="ngt">Consultoria</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Deja tu mensaje aquí"
                            />
                            {/* button */}
                            <Button size="md" className="max-w-40">Enviar Mensaje</Button>
                        </form>
                    </div>
                    {/* Info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex flex-1 items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default Contact