import 'mocha';
import { expect } from 'chai';

describe('<hello-world>', () => {
  let component;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<hello-world></hello-world>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <hello-world>');
    });
  });

  
  describe('name', () => {
    beforeEach(() => {
      component = fixture('<hello-world name="Pickle"></hello-world>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('name: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<hello-world>slot content</hello-world>');
    });

    it('is rendered', () => {
      // Firefox has different output so testing for inclusion instead of exact match.
      expect(component.$('slot').assignedNodes()[0].wholeText).to.include('slot content');
      // TODO: Switch to simpler test when Firefox is no longer polyfilled.
      // expect(component.innerText).equal('slot content');
    });
  });

  describe('--hello-world-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<hello-world></hello-world>');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(250, 250, 250)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture(`
          <div>
            <style>
              hello-world.blue {
                --hello-world-background-color: #03A9F4;
              }
            </style>
            <hello-world class="blue"></hello-world>
          </div>
        `).querySelector('hello-world');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): HTMLElement {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HTMLElement;
}
