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
      {#each contacts as contact }
      {#if !contact.title}
      <ListItem title={contact.groupTitle} groupTitle></ListItem>
      {:else}
      <ListItem title={contact.title}></ListItem>
      {/if}
      {/each}
    </ListGroup>
  </List>
  {@debug contacts}
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
  
    let contacts = useStore('contacts', (value) => (contacts = value));
</script>