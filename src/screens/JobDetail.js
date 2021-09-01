import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HtmlView from 'react-native-htmlview/HTMLView';
import { getJobById } from '../service/jobService';

const JobDetail = () => {
  const [job, setJob] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { params } = useRoute();

  useEffect(() => {
    getJobById(params.id)
      .then(res => {
        console.log(res);
        setJob(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    setIsLoading(false);
  }, [params]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loacenterLoadingder}>
          <ActivityIndicator color={'black'} />
        </View>
      ) : (
        <ScrollView>
          <View>
            <Text style={styles.title}>Company</Text>
            <View style={styles.topCard}>
              <Image source={{ uri: job.company_logo }} style={styles.logo} />
              <View style={styles.contentHeader}>
                <Text style={styles.title}>{job.company ?? ''}</Text>
                <Text style={styles.jobs}>{job.location ?? ''}</Text>
                <Text
                  numberOfLines={1}
                  style={styles.url}
                  onPress={() => Linking.openURL(job.url ?? '')}
                >
                  Go to Website
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.title}>Job Specification</Text>
          <View style={styles.spesificationCard}>
            <Text style={styles.titleSpesification}>Title</Text>
            <Text>{job.title ?? ''}</Text>
            <Text style={styles.titleSpesification}>Fulltime</Text>
            <Text>{job.type ?? '' === 'Full Time' ? 'Yes' : 'No'}</Text>
            <Text style={styles.titleSpesification}>Description</Text>
            <HtmlView value={job.description ?? ''} />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    padding: 15,
  },
  logo: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  titleSpesification: {
    color: 'grey',
    marginVertical: 5,
    fontSize: 12,
    fontWeight: '800',
  },
  jobs: {
    marginVertical: 5,
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  url: {
    fontSize: 12,
    fontWeight: '700',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  topCard: {
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  contentHeader: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  spesificationCard: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'column',
  },
  centerLoading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
