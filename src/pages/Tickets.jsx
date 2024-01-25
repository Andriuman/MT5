import React, { useState } from 'react';
import Acordeon from '../components/Acordeon';
import AccordeonTickets from '../components/AcordeonTickets';


export function Tickets() {

    return (
        <div className='flex flex-col w-full'>
            <div className="w-full flex text-2xl font-bold justify-center">Configuración</div>
            <div className="flex flex-row w-full justify-between">
                <div className="w-1/4 bg-zinc-950 text-white p-4">
                    <Acordeon />
                </div>
                <div className="flex w-3/4 flex-col pt-10 pr-10">
                    <div className="flex items-center p-4 cursor-pointer bg-zinc-900 text-white">
                        <div className='w-60'>
                            <div>Fecha y hora</div>
                        </div>
                        <div className='w-20'>
                            <div>Accion</div>
                        </div>
                        <div className='w-80'>
                            <div>Asunto</div>
                        </div>
                        <div className='w-60'>
                            <div>Correo electronico</div>
                        </div>
                        <div className='w-20'>
                            <div className='mr-20'>Estado</div>
                        </div>
                    </div>
                    <div className="" >
                        <div className="rounded mb-1" id='ticketCotainer'>

                        </div>

                        <AccordeonTickets
                            fecha="2024-12-22 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="No Answer"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2024-01-13 20:12:45 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="No Answer"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2024-01-07 18:23:11 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="No Answer"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2024-01-02 12:10:34 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="No Answer"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-27 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-21 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Urgente revision, proceso de retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-19 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Proceso de verificación para retiro"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-13 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Retiros pendientes y atrasados"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-05 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Retiros pendientes y atrasados"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-12-02 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Solicitud de retiro pendiente"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-11-22 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Solicitud de retiro pendiente"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-11-08 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Solicitud de retiro pendiente"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-10-26 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Solicitud de retiro pendiente"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                        <AccordeonTickets
                            fecha="2023-10-10 14:40:25 GMT"
                            accion="Ticket"
                            asunto="Solicitud de retiro pendiente"
                            correo="ancasafutrader21@gmail.com"
                            estado="Resolved"
                            contenido="Buenos dias, solicito la verificación y aprobacion de mis retiros que tiene
                            varias semanas de retraso y estas demoras ya me tienen afectado ya que tengo estos dineros comprometidos y 
                            no he podido disponer de ellos como deberia, esto me ha traido varios problemas
                            ya que no he podido cumplir con mis obligaciones, las mismas que adquiri pensando en el cumplimiento
                            de los contratos y los tiempos de retiro.
                            Hemos enviado varios tickets y espero se me de pronta respuesta y prioridad en vista de que tengo
                            varios retiros en la fila y varios tickets solicitando respuesta y atención a estos procesos para
                            que se puedan realizar a la menos brevedad."
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
