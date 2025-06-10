import { ChevronRight as ChevronRightSEM, Search as SearchSEM } from 'lucide-react-native';
import React, { useState as useStateSEM } from 'react';
import { View as ViewSEM, Text as TextSEM, TextInput as TextInputSEM, TouchableOpacity as TouchableOpacitySEM, FlatList as FlatListSEM, Image as ImageSEM, StyleSheet as StyleSheetSEM, StatusBar as StatusBarSEM } from 'react-native';

const ajudaDataSEM = [
  { id: '1', titulo: 'Novidades', descricao: 'Tudo sobre o nubank e nossos produtos.' },
  { id: '2', titulo: 'Conta', descricao: 'Conheça tudo sobre a sua conta digital' },
  { id: '3', titulo: 'Pagar Fatura', descricao: 'Descubra como e onde pagar a sua fatura' },
];

const iconesFeedbackSEM = [
  { id: '1', imagem: require('../assets/alerta.png'), label: 'péssimo' },
  { id: '2', imagem: require('../assets/triste.png'), label: 'ruim' },
  { id: '3', imagem: require('../assets/feliz.png'), label: 'bom' },
  { id: '4', imagem: require('../assets/coracao.png'), label: 'perfeito' }
];

export default function MeAjudaScreenSEM() {
  const [buscaSEM, setBuscaSEM] = useStateSEM('');
  
  const itensFiltradosSEM = ajudaDataSEM.filter(item => 
    item.titulo.toLowerCase().includes(buscaSEM.toLowerCase()) || 
    item.descricao.toLowerCase().includes(buscaSEM.toLowerCase())
  );

  const renderItemSEM = ({ item }: any) => (
    <TouchableOpacitySEM style={stylesSEM.itemSEM}>
      <ViewSEM>
        <TextSEM style={stylesSEM.tituloSEM}>{item.titulo}</TextSEM>
        <TextSEM style={stylesSEM.descricaoSEM}>{item.descricao}</TextSEM>
      </ViewSEM>
      <ChevronRightSEM size={24} color='#6F6F6F'/>
    </TouchableOpacitySEM>
  );

  return (
    <ViewSEM style={stylesSEM.containerSEM}>
      <ViewSEM style={stylesSEM.inputContainerSEM}>
        <TextInputSEM
          placeholder="Qual sua dúvida?"
          value={buscaSEM}
          onChangeText={setBuscaSEM}
          style={stylesSEM.inputSEM}
          placeholderTextColor="#999"
        />
        <SearchSEM size={20} color="#999" style={stylesSEM.searchIconSEM} />
      </ViewSEM>

      <TextSEM style={stylesSEM.textoFeedbackSEM}>Como você avalia o Me Ajuda?</TextSEM>
      <ViewSEM style={stylesSEM.feedbackContainerSEM}>
        {iconesFeedbackSEM.map(icon => (
          <TouchableOpacitySEM key={icon.id} style={stylesSEM.feedbackIconSEM}>
            <ImageSEM source={icon.imagem} style={stylesSEM.feedbackImageSEM} />
            <TextSEM style={stylesSEM.feedbackLabelSEM}>{icon.label}</TextSEM>
          </TouchableOpacitySEM>
        ))}
      </ViewSEM>

      <FlatListSEM
        data={itensFiltradosSEM}
        renderItem={renderItemSEM}
        keyExtractor={item => item.id}
        contentContainerStyle={stylesSEM.listaSEM}
        ListEmptyComponent={
          <TextSEM style={stylesSEM.emptyTextSEM}>Nenhum resultado encontrado</TextSEM>
        }
      />

      <ViewSEM style={stylesSEM.footerSEM}>
        <TouchableOpacitySEM style={stylesSEM.botaoFooterSEM}>
          <TextSEM style={stylesSEM.textoBotaoSEM}>E-MAIL</TextSEM>
        </TouchableOpacitySEM>
        <TouchableOpacitySEM style={stylesSEM.botaoFooterSEM}>
          <TextSEM style={stylesSEM.textoBotaoSEM}>CHAT</TextSEM>
        </TouchableOpacitySEM>
      </ViewSEM>
      <StatusBarSEM barStyle={'dark-content'}/>
    </ViewSEM>
  );
}

const stylesSEM = StyleSheetSEM.create({
  containerSEM: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  inputContainerSEM: {
    position: 'relative',
    marginBottom: 20
  },
  inputSEM: {
    height: 45,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingRight: 45,
    paddingLeft: 10,
    fontSize: 16,
  },
  searchIconSEM: {
    position: 'absolute',
    right: 15,
    top: 12
  },
  textoFeedbackSEM: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500'
  },
  feedbackContainerSEM: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  feedbackIconSEM: {
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },
  feedbackImageSEM: {
    width: 32,
    height: 32,
    marginBottom: 5
  },
  feedbackLabelSEM: {
    fontSize: 12,
    textTransform: 'capitalize'
  },
  listaSEM: {
    paddingBottom: 100
  },
  emptyTextSEM: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666'
  },
  itemSEM: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  tituloSEM: {
    fontSize: 16,
    fontWeight: '600'
  },
  descricaoSEM: {
    fontSize: 14,
    color: '#666'
  },
  footerSEM: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  botaoFooterSEM: {
    backgroundColor: '#810AD0',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10
  },
  textoBotaoSEM: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
