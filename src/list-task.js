export class List{

    static getList(){
        let lists;
        if(localStorage.getItem('tasks') === null){
            lists = [];
        }
        else{
            lists = JSON.parse(localStorage.getItem('tasks'));
        }
        return lists;
    }
    
    static addList(list){
        const lists = List.getList();

        lists.push(list);

        localStorage.setItem('tasks', JSON.stringify(lists));
    }
}