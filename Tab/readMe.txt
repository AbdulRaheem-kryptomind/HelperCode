<Tabs visibleTab={visibleTab} setVisibleTab={setVisibleTab} data={data}/>

............................................................................


  const data = [
    { id: "1", tabTitle: "Escrow Report"},
    { id: "2", tabTitle: "Instant Report"},
  ];
  const [visibleTab, setVisibleTab] = useState(data[0].id);

................................................

 useEffect(() => {
      if(visibleTab==="1"){
        navigate('/report-escrow');
      }
      else{
        navigate('/report-instant');
      }
   
  }, [visibleTab])
