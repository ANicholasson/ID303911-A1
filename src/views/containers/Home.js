import ProductItem from '../components/ProductItem.js';
import { getAllPosts } from '../../dummy/Posts.js';

let Home = {
    render : async () => {
        return (/*html*/`
            <div class="container">
                <div class="row">
                    <div class="col s10">
                        <h1>Items for sale</h1>
                    </div>
                    <div class="col s2">
                        <a href="/public/#/newproduct" class="btn-floating add-btn btn-large waves-effect waves-light red right">
                            <i class="material-icons">add</i>
                        </a>
                    </div>
                </div>
                
                <div id="posts-content"><div>
            </div>
        `);
    },
    after_render : async () => {
        let content = "";
        getAllPosts().forEach(post => {
            content += ProductItem(post.id, post.img, post.name, post.price, post.desc, post.seller);
        });
        document.getElementById('posts-content').innerHTML = content;
    }
}

export default Home;