import { NewsSource } from '../../types/news-api';
import './sources.css';

class Sources {
    draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');

            if (!(sourceName instanceof HTMLElement) || !(sourceItem instanceof HTMLElement)) {
                return;
            }

            sourceName.textContent = item.name;

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');

        if (!(sources instanceof HTMLElement)) {
            return;
        }

        sources.append(fragment);
    }
}

export default Sources;
