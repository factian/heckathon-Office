// sanity/pet.ts
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'pname',
            type: 'string',
            title: 'Product Name'
        },  
        {
            name: 'image',
            title: 'Product Image',
            type: 'image'
            
        },  
        {
            name: 'price',
            type: 'number',
            title: 'Product Price'
        },  
        {
            name: 'category',
            type: 'string',
            title: 'Product Category'
        }
    ]
}