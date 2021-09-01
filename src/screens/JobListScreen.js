import { useRoute } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { JobFilter } from '../components/JobFilter';
import { JobItem } from '../components/JobItem';
import { JobSearch } from '../components/JobSearch';
import { getJobList } from '../service/jobService';

const JobListScreen = () => {
  const { params } = useRoute();
  const [jobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState({ page: 1 });
  const [showFilter, setShowFilter] = useState(false);

  const onFilter = newfilter => {
    setFilter({ ...newfilter, page: 1 });
    setShowFilter(false);
    setJobList([]);
    getJob();
  };

  const getJob = useCallback(() => {
    getJobList({ ...filter, ...params })
      .then(res => {
        console.log(res);
        setIsLoading(false);
        setJobList(res.data.filter(data => data !== null));
      })
      .catch(e => {
        setIsLoading(false);
        console.log(e);
      });
  }, [filter, params]);

  const onRefresh = () => {
    setIsLoading(true);
    setFilter({ ...filter, page: 1 });
    getJob();
    setJobList([]);
  };

  useEffect(() => {
    getJob();
  }, [getJob]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <JobSearch showFilter={showFilter} setShowFilter={setShowFilter} />
        {showFilter && <JobFilter onApply={onFilter} {...filter} />}
      </View>

      {isLoading && !jobList.length ? (
        <View style={styles.centerLoading}>
          <ActivityIndicator size="large" color={'black'} />
        </View>
      ) : (
        <FlatList
          style={styles.jobListContainer}
          data={jobList}
          refreshControl={
            <RefreshControl onRefresh={onRefresh} refreshing={isLoading} />
          }
          keyExtractor={item => item?.id}
          renderItem={item => <JobItem {...item} />}
          // onEndReached={nextPage}
        />
      )}
    </View>
  );
};

export default JobListScreen;

const styles = StyleSheet.create({
  jobListContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1,
  },
  headerContainer: {
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: { flex: 1 },
  centerLoading: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
