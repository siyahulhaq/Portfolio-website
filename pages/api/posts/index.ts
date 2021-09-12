
export default async function handler(req: any,res: any) {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        res.status(200).json(data);
    } catch (error) {    
       res.status(200).json([]);
    }
}