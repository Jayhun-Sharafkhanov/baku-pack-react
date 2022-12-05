import axios from "axios";
import { AlertContext } from "context/AlertContext";
import { useContext, useEffect, useState } from 'react';
import { ContactsType } from "types/index";

const AdminContacts = () => {
    const [contacts, setContacts] = useState<ContactsType[]>([])


    useEffect(() => {
        axios.get('http://localhost:3004/contacts').then(({ data }) => {
            console.log(data)
            setContacts(data)
        })
    }, [])

    const alertNotify = useContext(AlertContext)

    return (
        <div>
            {
                contacts.map(({ id, email, fullName, phone, company }) => <div onClick={async () => {
                    const { data } = await axios.get('http://localhost:3004/contacts/' + id)
                    console.log(data)
                }} key={id}>
                    <h3>{fullName} -  {phone} - {company} - {email}
                        <button onClick={() => {
                            axios.delete('http://localhost:3004/contacts/' + id).then(() => {
                                setContacts((pre) => pre.filter(({ id: pId }) => pId !== id))
                                alertNotify({ message: 'silindi', type: 'success' })
                            }).catch((err) => {
                                alertNotify({ message:'silinmedi', type: 'error' })
                            })
                        }}>X</button>
                    </h3>
                </div>)
            }
        </div>
    )
}
export default AdminContacts;