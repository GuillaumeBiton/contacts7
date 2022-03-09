<Page>
  <Navbar title="Contacts List"></Navbar>
  <ListIndex
    indexes="auto"
    listEl=".list.contacts-list"
    scrollList={true}
    label={true}
    />
    <List contactsList ul={false}>
    <ListGroup>
      {#each contacts as contact, index }
      <ListItem title={index} groupTitle></ListItem>
      <ListItem title={contact.title}></ListItem>
      {/each}
    </ListGroup>
  </List>
</Page>
    
  
<script>
  import {
    Page, 
    Navbar, 
    List,
    ListIndex,
    ListGroup, 
    ListItem,
    useStore,
    } from 'framework7-svelte';
  
    let contacts = useStore('contacts', (value) => (contacts = groupList(value, 'title')));

    function groupList (list, propertyToIndex, filter) {
    var data = {}
    filter = filter || function (item) { return item.charAt(0).toUpperCase() }
    list.forEach(function (item) {
      data[filter(item[propertyToIndex])] = data[filter(item[propertyToIndex])] || []
      data[filter(item[propertyToIndex])].push(item)
    })
    return data
    }

    let groupedContacts = groupList(contacts, 'title');
</script>