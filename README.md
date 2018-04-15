# vue-window-modal

Simple window like modal for Vue.js

**Install**

    npm install --save https://github.com/ropbla9/vue-window-modal

**Init plugin**

    import  VueWindowModal  from  'vue-window-modal'
    
    Vue.use(VueWindowModal)

**Use**

    <vue-window-modal  :active="visibleFormCrud"  title="Client 1"  v-on:clickClose="visibleFormCrudUpdate(false)">
	    FOO TEXT ON DEFAULT SLOT :DDDDD 1
    </vue-window-modal>
    
    <vue-window-modal  :active="visibleFormCrudTwo"  title="Client 2"  v-on:clickClose="visibleFormCrudUpdateTwo(false)">
	    FOO TEXT ON DEFAULT SLOT :DDDDD 2
    </vue-window-modal>
    
    <vue-window-modal  :active="visibleFormCrudThree"  title="Client 3"  v-on:clickClose="visibleFormCrudThree = false">
    	    FOO TEXT ON DEFAULT SLOT :DDDDD 3
        </vue-window-modal>

It's not well written but properly working. Feel free to pull request.
