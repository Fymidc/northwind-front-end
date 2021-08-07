import React from 'react'
import {  Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Button} from 'semantic-ui-react'
import FthTextInput from '../utilities/customFormControls/FthTextInput'

function ProductAdd() {

    const initialValues = {
        productName: "",
        unitPrice: 10
    }

    const schema = Yup.object({
        productName: Yup.string().required("ürün adı zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunludur")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}

            >
                <Form className="ui form" >
                    <FthTextInput name="productName" placeholder="ürün adı" /> 
                    <FthTextInput name="unitPrice" placeholder="ürün fiyatı" /> 
                   
                    <Button color="green" type="submit" > Ekle </Button>
                </Form>

            </Formik>
        </div>
    )
}

export default ProductAdd
